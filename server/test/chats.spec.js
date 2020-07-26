import supertest from "supertest";
import { createServer } from "./../createServer.js";
import { chatsResult } from "./fixtures.js";

describe("GET /chats", () => {
  let app;
  
  beforeAll(() => {
    app = createServer();
  });
  
  afterAll(() => {
    app.close();
  });

  it("should get list of all chats", async () => {
    const { body, status } = await supertest(app).get("/chats");

    expect(status).toEqual(200);
    expect(body).toEqual(chatsResult);
  });
});
