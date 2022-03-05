import { Environment } from './environment-interface';

export const environment: Environment = {
  production: true,
  base_url: '',
  urls: {
    concerts: {
      upcoming: 'https://api.bluebirdbigband.de/upcoming',
    },
    auth: { login: '', logout: '', refresh: '' },
    intern: { emails: '' },
    download: '',
  },
};
