import { Injectable } from '@nestjs/common';
import provinces from './data/locations';

@Injectable()
export class LocationsService {
  getProvinces(): string[] {
    return provinces.map(province => province.name);
  }
  getLocations(provinceName: string): string[] {
    return provinces.find((provinceData) => provinceData.name.toLowerCase() === provinceName.toLowerCase() )?.locations
  }
}



