const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

// const express = require('express');
// const app = express();
// const port = 4444;
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === 'ns not found') return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes('a background operation is currently running')) return;
      console.log(error.message);
    }
  }
}

module.exports = {
  setupDB() {
    // Connect to Mongoose
    beforeAll(async () => {
      const url =
        'mongodb+srv://team-work-social:5678@cluster0.cfu7c.mongodb.net/work-social-test?retryWrites=true&w=majority';
      await mongoose.connect(url);
      console.log('MongoDB database connection established successfully');
    });

    // Cleans up database between each test
    afterEach(async () => {
      await removeAllCollections();
    });

    // Disconnect Mongoose
    afterAll(async () => {
      await dropAllCollections();
      await mongoose.connection.close();
    });
  },
};
