import { Router } from 'express';
import NewsController from './controllers/NewsController';

const router = Router();

router.get('/news', NewsController.indexMain);
router.get('/news/secondary', NewsController.indexSecondary);
router.get('/news/:id', NewsController.show);

export default router;
