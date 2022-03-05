// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment-interface';

export const environment: Environment = {
  production: false,
  base_url: 'http://localhost:8080/',
  urls: {
    concerts: {
      upcoming: 'upcoming',
    },
    auth: {
      login: 'auth/login',
      logout: 'auth/logout',
      refresh: 'auth/refresh',
    },
    intern: {
      emails: 'intern/basics',
      concert_recordings: 'intern/concert-recordings',
    },
    download: 'download',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
