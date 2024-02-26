import { Injectable } from '@nestjs/common';
import provinces, { IProvince } from './data/locations';
import locationsBuenosAires, { ISpot } from './data/spots';

@Injectable()
export class GeoLocationService {
  getProvinces(): IProvince[] {
    return provinces;
  }
  getLocations(provinceName: string): string[] {
    //validate provinceName
    return provinces.find((provinceData) => provinceData.name.toLowerCase() === provinceName)?.locations
  }
  getSpots(provinceName: string, locationName: string): ISpot[] {
    //validate provinceName
    //validate locationName

    let spots = [];
    if(provinceName === provinces[0].name.toLowerCase()) spots = locationsBuenosAires.find(location => location.name.toLowerCase() === locationName)?.spots
    if(provinceName === provinces[1].name.toLowerCase()) spots = locationsBuenosAires.find(location => location.name.toLowerCase() === locationName)?.spots

    return spots
  }
}



