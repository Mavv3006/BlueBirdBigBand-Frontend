export const KlausGehrlein: Person = {
  name: 'Klaus Gehrlein',

  address: {
    street: 'Rheinhäuserstr. 24',
    plz: 68165,
    city_name: 'Mannheim',
    country: 'Germany',
  },

  telephone: '0621 40 94 97',

  telefax: '0621 3 19 74 88',

  mobile: '0171 5 80 84 81',

  email: 'bandleiter@bluebirdbigband.de',
};

export interface Person {
  name: string;
  address: Address;
  telephone: string;
  telefax: string;
  mobile: string;
  email: string;
}

export interface Address {
  street: string;
  plz: number;
  city_name: string;
  country: string;
}
