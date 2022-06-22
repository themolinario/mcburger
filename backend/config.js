import env from 'dotenv';
import isEmpty from './src/utils/isEmpty';

env.config();

export default {
  port: process.env.PORT || 80,
  rootUser: {
    username: process.env.ROOT_USER_USERNAME,
    email: process.env.ROOT_USER_EMAIL,
    password: process.env.ROOT_USER_PASSWORD,
    firstName: process.env.ROOT_USER_FIRST_NAME,
    lastName: process.env.ROOT_USER_LAST_NAME,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  secret: process.env.AUTH_SECRET || 'mcburger-app',
  mailerEnabled: process.env.MAILER_ENABLED === 'true',
  nodemailer: {
    from: process.env.MAILER_FROM,
  },
  nodemailerTransport: {
    service: isEmpty(process.env.MAILER_SERVICE) ? undefined : process.env.MAILER_SERVICE,
    host: isEmpty(process.env.MAILER_HOST) ? undefined : process.env.MAILER_HOST,
    port: isEmpty(process.env.MAILER_PORT) ? undefined : parseInt(process.env.MAILER_HOST, 10),
    secure: isEmpty(process.env.MAILER_SECURE) ? undefined : process.env.MAILER_SECURE === 'true',
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  },
  nodemailerFooter: process.env.MAILER_FOOTER,
  supportEmailAddress: process.env.SUPPORT_EMAIL_ADDRESS || 'support@example.com',
};