// const app = require('../routes/users');
// const supertest = require('supertest');
// const request = supertest(app);
// const User = require('../models/user.model');
// const { setupDB } = require('../test-env/test-helper');
// setupDB('endpoint-testing', true);

const app = require('../test-env/test-server');
const supertest = require('supertest');
const request = supertest(app);
const User = require('../models/user.model');

it('get the user test endpoints and displays db content', async () => {
  const res = await request.get('/users');
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual([]);
});

it('tests that user can be added and saved', async () => {
  const res = await request.post('/users/register').send({
    username: 'David',
    email: 'sirdavidh@gmail.com',
    password: 's4vetheplanet',
  });

  expect(res.body.name).toBeTruthy();
  expect(res.body.email).toBeTruthy();
  const user = await User.findOne({ email: 'sirdavidh@gmail.com' });
  expect(user.username).toBeTruthy();
  expect(user.email).toBeTruthy();
});
