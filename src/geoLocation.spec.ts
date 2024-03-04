import { Test, TestingModule } from '@nestjs/testing';
// add all jest-extended matchers
import * as matchers from 'jest-extended';
import { GeoLocationController } from './geoLocation.controller';
import { GeoLocationService } from './geoLocation.service';
import provinces from './data/provinces';
import locationsBuenosAires from './data/spots';

describe('geoLocation', () => {
  let geoLocationController: GeoLocationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeoLocationController],
      providers: [GeoLocationService],
    }).compile();

    geoLocationController = app.get<GeoLocationController>(GeoLocationController);
  });

  describe('geoLocation /provinces', () => {
    it('should return the right provinces', () => {
      expect(geoLocationController.getProvinces()).toBe(provinces);
    });
    it('should have at least one province', () => {
      expect(geoLocationController.getProvinces().length).toBeGreaterThan(0);
    })
    it('should have at least one location for each province', () => {
      geoLocationController.getProvinces().map(province => {
        expect(province).toHaveProperty('locations');
        expect(province.locations.length).toBeGreaterThan(0);
      })
    });
  });

  describe('geoLocation /provinces/<province>', () => {
    const provinceName = provinces[0].name;
    it('should return the right locations for a province', () => {
      expect(geoLocationController.getLocations(provinceName)).toBe(provinces[0].locations);
    });
    it('should have at least one location', () => {
      expect(geoLocationController.getLocations(provinceName).length).toBeGreaterThan(0);
    })
    it('should return locations as strings', () => {
      geoLocationController.getLocations(provinceName).map(location => expect(location).toBeString());
    })
  });

  describe('geoLocation /provinces/<province>/<location>', () => {
    const provinceName = provinces[0].name;
    const locationName = locationsBuenosAires[0].name;
    
    it('should return the right spots for a province and a location', () => {
      expect(geoLocationController.getSpots(provinceName, locationName)).toBe(locationsBuenosAires[0].spots);
    });
    it('should have at least one spot', () => {
      expect(geoLocationController.getSpots(provinceName, locationName).length).toBeGreaterThan(0);
    })
  });
});
