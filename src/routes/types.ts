export interface Response {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link?: string;
  key: string;
  accessibility: number;
}

export interface Error {
  msg: string;
}
