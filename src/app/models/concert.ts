export interface Concert {
  date: string;
  start_time: string;
  end_time: string;
  band_name: string;
  location: {
    street: string;
    number: string;
    plz: number;
    name: string;
  };
  descriptions: {
    organizer: string;
    place: string;
  };
}
