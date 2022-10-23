import { Environment } from './environment-interface';

export const environment: Environment = {
  production: true,
  base_url: 'https://test.dev.api.bluebirdbigband.de/api/',
  urls: {
    concerts: {
      upcoming: 'concerts/upcoming',
    },
    auth: {
      login: 'auth/login',
      logout: 'auth/logout',
      refresh: 'auth/refresh',
    },
    intern: {
      emails: 'intern/basics',
    },
    download: {
      index: 'download',
      songs: 'download/songs',
      recordings: 'download/recordings',
    },
  },
};
