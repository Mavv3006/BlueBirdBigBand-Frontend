export interface Environment {
  production: boolean;
  base_url: string;
  urls: {
    concerts: {
      upcoming: string;
    };
    auth: {
      login: string;
      logout: string;
      refresh: string;
    };
    intern: {
      emails: string;
      concert_recordings: string;
    };
    download: {
      index: string;
      songs: string;
      recordings: string;
    };
  };
}
