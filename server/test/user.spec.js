const request = require("supertest");
const { app } = require("./../index");

describe("GET /user/:id", () => {
  describe("should get user by id", () => {
    const userId = "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e";
    const incorrectUserId = "abc123"

    it("should return user object if user id matches", () => {
      request(app)
        .get(`/user/${userId}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          const { first_name, last_name, user_uuid } = response;
          
          expect(response).not.toBeUndefined();
          expect(user_uuid).toEqual(userId);
          expect(first_name).not.toBeUndefined();
          expect(last_name).not.toBeUndefined();
        });
    });

    it("should return 404 status code if user id dont matche", async () => {
      request(app)
        .get(`/user/${incorrectUserId}`)
        .expect('Content-Type', /json/)
        .expect(404)
        .then(response => {
          expect(response.message).toContain("User not found");
        });
      });
  });
});
