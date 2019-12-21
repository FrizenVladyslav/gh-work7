import { Container } from 'typedi';
import path from 'path';
import fs from 'fs';

try {
  const modelsDir = path.resolve(__dirname, '../models');
  const servicesDir = path.resolve(__dirname, '../services');

  const models = fs.readdirSync(modelsDir);
  const services = fs.readdirSync(servicesDir);

  const replaceName = string => string.replace('.js', '');

  // DI mongoose models
  models.forEach(model => {
    Container.set(
      `${replaceName(model)}Model`,
      require(`../models/${model}`).default,
    );
  });
  // DI services
  services.forEach(service => {
    Container.set(
      `${replaceName(service)}Service`,
      require(`../services/${service}`).default,
    );
  });
} catch (e) {
  console.error('🔥 Error on dependency injector loader', e);
  throw e;
}
