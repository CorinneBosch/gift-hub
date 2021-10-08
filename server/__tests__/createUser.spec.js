const router = require('../routes/Users.js');
const app = require('../server.js');// Link to your server file
const supertest = require("supertest");
const request = supertest(app);


// app.get("/", async (req, res) => {
//   res.json([]);
// });

describe('User', () => {
  app.get("/users", async (req, res) => {
  res.json([]);
  it("get the user test endpoints", async done => {
    const res = await request.get("/users");
    expect(res.status).toBe(200)
    done();
  });

});
});
