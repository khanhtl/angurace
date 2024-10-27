import { Pony } from './pony.model';

export interface Race {
  id: number;
  name: string;
  ponies: Pony[];
  startInstant: string;
}
