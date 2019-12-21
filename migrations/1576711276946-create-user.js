const User = require('../src/models/user');

async function up() {
  try {
    await User.create({
      firstName: 'Test',
      lastName: 'Test',
      email: 'test@mail.com',
    });
  } catch (e) {
    console.error(e);
  }
}

async function down() {
  try {
    await User.findOneAndRemove({ email: 'test@mail.com' });
  } catch (e) {
    console.error(e);
  }
}

module.exports = { up, down };
