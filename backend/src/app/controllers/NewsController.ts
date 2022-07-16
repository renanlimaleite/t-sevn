import { Request, Response } from 'express';
import NewsRepository from '../repositories/NewsRepository';

class NewsController {
  async indexMain(request: Request, response: Response) {
    const news = await NewsRepository.findAllMain();
    return response.status(200).json(news);
  }

  async indexSecondary(request: Request, response: Response) {
    const news = await NewsRepository.findAllSecondary();
    return response.status(200).json(news);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const uniqueNew = await NewsRepository.findById(id);

    return response.status(200).json(uniqueNew);
  }
}

export default new NewsController();
