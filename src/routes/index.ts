import Router from '@koa/router';
import getPrice from './services';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = await getPrice();
});

export default router;
