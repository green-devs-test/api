import { ILocation, locationsBuenosAires, locationsMendoza } from './locations';

export interface IProvince {
  id: number;
  name: string;
  locations: ILocation[];
  locationsLength: number;
}

const provinces: IProvince[] = [
  {
    id: 1,
    name: 'Buenos Aires',
    locations: locationsBuenosAires,
    locationsLength: locationsBuenosAires.length,
  },
  {
    id: 2,
    name: 'Mendoza',
    locations: locationsMendoza,
    locationsLength: locationsMendoza.length,
  },
];

export default provinces;
