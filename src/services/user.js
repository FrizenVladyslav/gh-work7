import { Container } from 'typedi';
import moment from 'moment';

class UserService {
  constructor(container) {
    this.fileService = container.get('fileService');
    this.userModel = container.get('userModel');
  }

  async create(data) {
    const user = await this.userModel.create(data);
    return user;
  }

  async createBulk(filename) {
    const data = await this.fileService.parseCSV(filename);
    const insertedIds = await this.userModel.collection.insertMany(data);
    return insertedIds;
  }

  async findAll(filters = {}) {
    const users = await this.userModel.find(filters);
    return users;
  }

  async findOne(filters) {
    const user = await this.userModel.findOne(filters);
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

  async statistic() {
    const today = moment();
    const users = await this.findAll({
      createdAt: {
        $gte: today.startOf('month').toDate(),
        $lte: today.endOf('month').toDate(),
      },
    });
    if (!users || !users.length) return [];

    return [...Array(today.endOf('month').get('date'))].map((day, index) => ({
      day: index + 1,
      count: users.filter(
        ({ createdAt }) => moment(createdAt).get('date') === index + 1,
      ).length,
    }));
  }
}

export default new UserService(Container);
