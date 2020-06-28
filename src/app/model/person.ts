import { Pet } from './pet';

export interface Person {
    name: string;
    gender: string;
    age: number;
    pets: Pet[];
}
