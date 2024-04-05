import { MATERIALS } from './materials';

export interface ISpot {
  id: number;
  name: string;
  address: string;
  link: string | null;
  telephone: string | null;
  materials: string[];
}

export interface ILocation {
  id: number;
  name: string;
  spots: ISpot[];
}

const locationsBuenosAires: ILocation[] = [
  {
    id: 1,
    name: 'San Telmo',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Plaza Rosario Vera Peñaloza',
        address: 'Av. San Juan y Chacabuco',
        link: 'https://maps.app.goo.gl/Tffg5QyDLWhpYwT19',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'La Boca',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Barrio Rodrigo Bueno',
        address: 'Av. España 1800',
        link: 'https://maps.app.goo.gl/SV8RBxSYZ8oRgr6Z9',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Balvanera',
    spots: [
      {
        id: 1,
        name: 'Punto Verde Plaza 1 de Mayo',
        address: 'Hipólito Yrigoyen y Pasco',
        link: 'https://maps.app.goo.gl/9omtAHuJhJGXaPNA6',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
      {
        id: 2,
        name: 'Punto Verde Plaza Manzana 66',
        address: 'Moreno y Jujuy',
        link: 'https://maps.app.goo.gl/wBQa3dRi7mLQTQgr9',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
];

const locationsMendoza: ILocation[] = [
  {
    id: 1,
    name: 'Capital',
    spots: [
      {
        id: 1,
        address: 'Cerro Fundición',
        link: '',
        name: 'B° Sanidad (UV)',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
      {
        id: 2,
        address: 'Potrerillos 799-899',
        link: '',
        name: 'Gimnasio N° 4',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
      {
        id: 3,
        address: 'Alpatacal 3150',
        link: '',
        name: 'Gimnasio N° 2',
        telephone: null,
        materials: [
          MATERIALS.PAPERS,
          MATERIALS.CARTONS,
          MATERIALS.PLASTICS,
          MATERIALS.CANS,
          MATERIALS.WASTEOIL,
          MATERIALS.COFFEECAPSULES,
          MATERIALS.BATTERIES,
          MATERIALS.ORGANIC,
        ],
      },
    ],
  },
];

export { locationsBuenosAires, locationsMendoza };
