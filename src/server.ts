import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './routes';

export const start = () => {
  const app = new Koa();
  app.use(bodyParser());
  app.use(cors({ allowMethods: ['GET', 'POST'] }));

  app.use(router.routes());
  const PORT = process.env.PORT || 3000;

  const server = app.listen(PORT, () => {
    console.log(`Koa is listening to http://localhost:${PORT}`);
  });
};
