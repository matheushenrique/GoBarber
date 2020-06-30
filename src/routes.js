import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Matheus',
    email: 'teste@exemplo',
    password_hash: '134543',
  });
  res.json(user);
});

export default routes;
