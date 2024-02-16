import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { GeoLocationService } from './geoLocation.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly geoLocationsService: GeoLocationService) {}

  @Get()
  getProvinces(): string[] {
    return this.geoLocationsService.getProvinces();
  }

  @Get(':province')
  getLocations(@Param('province') province: string): string[] {
    const location = this.geoLocationsService.getLocations(province);
    if (!location) throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    return location;
  }

  @Get(':province/:location')
  getSpots(@Param('province') province: string, @Param('location') location: string): string[] {
    const spots = this.geoLocationsService.getSpots(province, location);
    console.log(spots);
    return spots;
  }
}
