import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoLocationController } from './geoLocation.controller';
import { GeoLocationService } from './geoLocation.service';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';

@Module({
  imports: [],
  controllers: [AppController, GeoLocationController, MaterialController],
  providers: [AppService, GeoLocationService, MaterialService],
})
export class AppModule {}
