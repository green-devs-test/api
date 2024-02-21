interface IProvince {
  id: number,
  name: string,
  locations: string[]
}

const provinces: IProvince[] = [
  {
    id: 1,
    name: 'Buenos Aires',
    locations: [
      'San Telmo',
      'La Boca',
      'Recoleta',
      'Balvanera',
      'Barracas',
      'Almagro',
      'Boedo',
      'Caballito',
      'Flores',
      'Parque Chacabuco',
      'Villa Soldati',
      'Villa Lugano',
      'Liniers',
      'Villa Real',
      'Monte Castro',
      'Floresta',
      'Nuñez',
      'Saavedra',
      'Villa Urquiza',
      'Retiro',
      'Parque Patricios',
      'Nueva Pompeya',
      'Constitucion',
    ],
  },
  {
    id: 2,
    name: 'Mendoza',
    locations: ['Capital', 'Godoy Cruz'],
  },
];

export default provinces;
