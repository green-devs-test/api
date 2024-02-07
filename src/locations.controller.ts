import { Controller, Get, Param, Post } from '@nestjs/common';
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
    return this.locationsService.getLocations(province);
  }
}
