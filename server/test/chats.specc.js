import request from "supertest";
import { app } from "./../index";

// const scope = nock('http://localhost:5000')
//   .get('/messages')
//   .reply(200, { 
//     body: [{
//       message_uuid: "3b777c22-5f7d-4552-8294-7363c68f6682",
//       chat_uuid: "802e9b88-60f2-43a1-b8b9-bad33afb0f7b",
//       author_uuid: "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e",
//       text: "Hi!"
//     }]
//   });
  

// jest.mock("./../helpers/fetchData", () => ({
//   fetchData: jest.fn().mockImplementation((url) => {
//     switch (url) {
//       case "http://localhost:5000/messages": {
//         // console.log("url", url)
//         return Promise.resolve([{
//           message_uuid: "123",
//           chat_uuid: "456",
//           author_uuid: "a2e",
//           text: "Hi!"
//         }]);
//       }
//       case `http://localhost:5000/user/a2e`:
//         return Promise.resolve([{
//           user_uuid: "a2e",
//           first_name: "John",
//           last_name: "Doe"
//         }])
//       default:
//         return  null;
//     }
//   })
// }));

jest.mock("./../helpers/fetchData", () => ({
  fetchData: jest.fn(() => [])
}));

describe("GET /chats", () => {
  // afterAll(done => {
  //   app.close();
  //   done();
  // });

  it("should get list of all chats", () => {
    request(app)
      .get('/chats')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response).not.toBeUndefined();
        // expect(response).toEqual([{
        //   chat_uuid: "123"
        // }]);
      });
    
    // console.log(body)
    // // .expect("Content-Type", /json/)
    // expect(status).toEqual(200);
    // expect(body).not.toBeUndefined();
  });
});
