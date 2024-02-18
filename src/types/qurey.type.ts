export interface IQuery {
  city?: string | null;
  lat?: number | null;
  lon?: number | null;

  [key: string]: string | number;
}
