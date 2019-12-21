import { Container } from 'typedi';

class UserService {
  constructor(container) {
    this.userModel = container.get('userModel');
  }

  async create(data) {
    const user = await this.userModel.create(data);
    return user;
  }

  async findAll(filters = {}) {
    const users = await this.userModel.find(filters);
    return users;
  }

  async findOne(id) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async update(id, data) {
    const user = this.userModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true },
    );
    return user;
  }

  async delete(id) {
    await this.userModel.findOneAndDelete(id);
  }
}

export default new UserService(Container);
