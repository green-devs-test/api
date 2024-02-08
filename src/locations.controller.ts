import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  getProvinces(): string[] {
    return this.locationsService.getProvinces();
  }

  @Get(':province')
  getLocations(@Param('province') province: string): string[] {
    const location = this.locationsService.getLocations(province);
    if (!location) throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    return location;
  }
}
