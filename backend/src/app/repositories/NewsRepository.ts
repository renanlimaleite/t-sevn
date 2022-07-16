import Mock from '../mock';

class NewsRepository {
  async findAllMain() {
    const result = Mock.filter(((item) => item.type === 'main'));
    return result;
  }

  async findAllSecondary() {
    const result = Mock.filter(((item) => item.type === 'secondary'));
    return result;
  }

  async findById(id: string) {
    const result = Mock.find((mock) => mock?.id === id);
    return result;
  }
}

export default new NewsRepository();
