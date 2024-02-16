import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsController } from './geoLocation.controller';
import { GeoLocationService } from './geoLocation.service';

@Module({
  imports: [],
  controllers: [AppController, LocationsController],
  providers: [AppService, GeoLocationService],
})
export class AppModule {}
