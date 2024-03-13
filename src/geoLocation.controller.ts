import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GeoLocationService } from './geoLocation.service';
import { ILocation, ISpot } from './data/locations';
import { IProvince } from './data/provinces';

@Controller('provinces')
export class GeoLocationController {
  constructor(private readonly geoLocationsService: GeoLocationService) {}

  @Get()
  getProvinces(): IProvince[] {
    return this.geoLocationsService.getProvinces();
  }

  @Get(':province')
  getLocations(@Param('province') province: string): ILocation[] {
    const location = this.geoLocationsService.getLocations(
      province.toLowerCase(),
    );
    if (!location) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return location;
  }

  @Get(':province/:location')
  getSpots(
    @Param('province') province: string,
    @Param('location') location: string,
  ): ISpot[] {
    return this.geoLocationsService.getSpots(
      province.toLowerCase(),
      location.toLowerCase(),
    );
  }
}
