import { Injectable } from '@nestjs/common';
import provinces from './data/locations';
import locationsBuenosAires from './data/spots';

@Injectable()
export class GeoLocationService {
  getProvinces(): string[] {
    return provinces.map(province => province.name);
  }
  getLocations(provinceName: string): string[] {
    //validate provinceName
    return provinces.find((provinceData) => provinceData.name.toLowerCase() === provinceName.toLowerCase() )?.locations
  }
  getSpots(provinceName: string, locationName: string): string[] {
    //validate provinceName
    //validate locationName

    let spots = [];
    //buenos aires
    console.log(provinceName.toLowerCase() === provinces[0].name.toLowerCase())
    if(provinceName.toLowerCase() === provinces[0].name.toLowerCase()) spots = locationsBuenosAires.find(location => location.name.toLowerCase() === locationName.toLowerCase())?.spots
    if(provinceName.toLowerCase() === provinces[1].name.toLowerCase()) spots = locationsBuenosAires.find(location => location.name.toLowerCase() === locationName.toLowerCase())?.spots

    console.log("spots", spots)
    /* 
      buscar la provincia
      validar que la location pertenece a la provincia
      teniendo la provincia, usar locationsBuenosAires o locationsMendoza
      teniendo la location filtrar locationsBuenosAires o locationsMendoza
      devolver los spots existentes
    */
    return spots
  }
}



