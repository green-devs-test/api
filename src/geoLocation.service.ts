import { Injectable } from '@nestjs/common';
import provinces, { IProvince } from './data/provinces';
import { ILocation, ISpot, locationsBuenosAires } from './data/locations';

@Injectable()
export class GeoLocationService {
  getProvinces(): IProvince[] {
    // array deep copy
    const clonedProvinces = [];
    provinces.forEach((province) =>
      clonedProvinces.push(Object.assign({}, province)),
    );
    clonedProvinces.map((province) => {
      province.locations = null;
      return province;
    });
    return clonedProvinces;
  }
  getLocations(provinceName: string): ILocation[] {
    //validate provinceName
    return provinces.find(
      (provinceData) => provinceData.name.toLowerCase() === provinceName,
    )?.locations;
  }
  getSpots(provinceName: string, locationName: string): ISpot[] {
    //validate provinceName
    //validate locationName

    let spots = [];
    if (provinceName === provinces[0].name.toLowerCase())
      spots = locationsBuenosAires.find(
        (location) => location.name.toLowerCase() === locationName,
      )?.spots;
    if (provinceName === provinces[1].name.toLowerCase())
      spots = locationsBuenosAires.find(
        (location) => location.name.toLowerCase() === locationName,
      )?.spots;

    return spots;
  }
}
