const router = require('../routes/users.js');
const app = require('../server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

// it('get the user test endpoints and displays db content', async () => {
//   const res = await request.get('/users');
//   expect(res.status).toBe(200);
//   expect(res.body).toStrictEqual([
//     {
//       _id: '616056fe920263dc9706f129',
//       username: 'peterpan44',
//       email: 'bill@gmail.com',
//       password: '234567891',
//       createdAt: '2021-10-08T14:34:38.714Z',
//       updatedAt: '2021-10-08T14:34:38.714Z',
//       __v: 0,
//     },
//   ]);
// });

it('tests that user can be added and saved', async () => {
  const res = await (
    await request.get('/users/register')
  ).send({
    username: 'David',
    email: 'sirdavidattenborough@gmail.com',
    password: 's4vetheplanet',
  });
  const user = await router.findOne({ email: 'sirdavidattenborough@gmail.com' });
  expect(user.username).toBeTruthy();
  expect(user.email).toBeTruthy(); 
});
