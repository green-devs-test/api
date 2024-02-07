import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

@Module({
  imports: [],
  controllers: [AppController, LocationsController],
  providers: [AppService, LocationsService],
})
export class AppModule {}
