import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoLocationController } from './geoLocation.controller';
import { GeoLocationService } from './geoLocation.service';

@Module({
  imports: [],
  controllers: [AppController, GeoLocationController],
  providers: [AppService, GeoLocationService],
})
export class AppModule {}
