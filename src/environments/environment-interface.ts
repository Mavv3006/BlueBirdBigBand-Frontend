export interface Environment {
  production: boolean;
  urls: {
    concerts: {
      upcoming: string;
    };
    auth: {
      login: string;
      logout: string;
      refresh: string;
    };
  };
}
