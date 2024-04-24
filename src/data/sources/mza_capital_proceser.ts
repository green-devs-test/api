const fs = require("fs");
import { writeFile } from 'fs/promises';
import { ILocation } from '../locations';


interface IReadCSVFile {
    filePath: string;
    department: string;
    departmentId: number;
}

function readCSVFile({ filePath, department, departmentId }: IReadCSVFile) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    const headers = lines[0].split(';');

    const locations = {
        id: departmentId,
        name: department,
        spots: [],
      };

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(';');

        const latitude=values[headers.indexOf('y_wgs')].replace(',','.');
        const longitude=values[headers.indexOf('x_wgs')].replace(',','.').replace('\r','');
        
        
        const spot = {
            id: i,
            name: values[headers.indexOf('name')],
            address: values[headers.indexOf('address')],
            link: `https://www.google.com/maps/place/${latitude},${longitude}`,
            telephone: null,
            latitude,
            longitude,
            materials: i,
        };
        
        locations.spots.push(spot);
    }

    console.log(locations);

    return locations;
}

async function writeLocationsToFile(locations: ILocation, filePath: string) {
    const data = JSON.stringify(locations, null, 2);
    await writeFile(filePath, data);
  }
  
  
  const locations = readCSVFile({
    filePath: "./src/data/sources/puntosverdes_ruleros_2021_mza_capital.csv",
    department: "Capital",
    departmentId: 1
});

// Usage:
locations && writeLocationsToFile(locations, './src/data/sources/locations_mza.json')
  .then(() => console.log('Locations data written to file'))
  .catch(console.error);