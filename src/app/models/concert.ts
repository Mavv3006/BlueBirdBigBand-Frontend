export interface Concert {
  date: string,
  start_time: string,
  end_time: string,
  band_name: string,
  location: {
    street: string,
    number: string,
    plz: number,
    name: string
  },
  description: {
    organizer: string,
    place: string
  }
}
