import supertest from "supertest";
import { createServer } from "./../createServer.js";

describe("GET /user/:id", () => {
  let app;
  
  beforeAll(() => {
    app = createServer();
  });
  
  afterAll(() => {
    app.close();
  });

  describe("should get user by id", () => {
    const userId = "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e";
    const incorrectUserId = "abc123";

    it("should return user object if user id matches", async () => {
      const { body, status } = await supertest(app).get(`/user/${userId}`);

      expect(status).toEqual(200);
      expect(body).toEqual({
        user_uuid: userId,
        first_name: "John",
        last_name: "Doe"
      })
    });

    it("should return 404 status code if user id dont match", async () => {
      const { body, status } = await supertest(app).get(`/user/${incorrectUserId}`);

      expect(status).toEqual(404);
      expect(body.message).toEqual("User not found");
      });
  });
});
