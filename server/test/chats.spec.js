import supertest from "supertest";
import { createServer } from "./../createServer.js";
import { messageUrl, userUrl, user, messages } from "./fixtures.js";
import { fetchData } from "./../helpers/fetchData.js";

jest.mock("./../helpers/fetchData", () => ({
  fetchData: jest.fn()
}));

describe("GET /chats", () => {
  let app;
  
  beforeAll(() => {
    app = createServer();
  });
  
  afterAll(() => {
    app.close();
  });

  it("should get list of all chats", async () => {
    fetchData.mockImplementation((url) => {
      switch (url) {
        case messageUrl: 
          return messages;
        case userUrl:
          return user;
        default:
          return null;
      }
    });

    const { body, status } = await supertest(app).get("/chats");

    expect(status).toEqual(200);
    expect(body).toEqual([{
      chat_uuid: "456",
      messages_count: 1,
      users: [
        "John Doe",
      ],
    }]);
  });

  it("should return empty list when no messages", async () => {
    fetchData.mockImplementation((url) => {
      switch (url) {
        case messageUrl: 
          return null;
        case userUrl:
          return user;
        default:
          return  null;
      }
    });

    const { body, status } = await supertest(app).get("/chats");

    expect(status).toEqual(200);
    expect(body).toEqual([]);
  });

  it("should return only Anonymous users when no users", async () => {
    fetchData.mockImplementation((url) => {
      switch (url) {
        case messageUrl: 
          return messages;
        case userUrl:
          return {};
        default:
          return  null;
      }
    });

    const { body, status } = await supertest(app).get("/chats");

    expect(status).toEqual(200);
    expect(body).toEqual([{
      chat_uuid: "456",
      messages_count: 1,
      users: [
        "Anonymous"
      ]
    }]);
  });
});
