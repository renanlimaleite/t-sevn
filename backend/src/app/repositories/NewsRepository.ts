class NewsRepository {
  async findAllMain() {
    return [];
  }

  async findAllSecondary() {
    return [];
  }

  async findById(id: string) {
    const result = [{ id: '1' }].find((mock) => mock?.id === id);
    return result;
  }
}

export default new NewsRepository();
