import supertest from "supertest";
import { createServer } from "./../createServer.js";
import { messages } from "./../controllers/mockedData.js";

describe("GET /messages", () => {
  let app;
  
  beforeAll(() => {
    app = createServer();
  });
  
  afterAll(() => {
    app.close();
  });


  it("should get list of all messages", async () => {
    const { body, status } = await supertest(app).get("/messages");

    expect(status).toEqual(200);
    expect(body).toEqual(messages);
  });
});
