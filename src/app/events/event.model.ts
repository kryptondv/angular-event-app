export interface IEvent {
  id?: number | string;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: ISession[];
}

export interface ISession {
  id?: number | string;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
