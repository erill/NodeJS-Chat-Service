const request = require("supertest");
const { app } = require("./../index");

describe("GET /messages", () => {
  it("should get list of all messages", () => {
    request(app)
      .get('/messages')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response).not.toBeUndefined();
      });
  });
});
