import { Test, TestingModule } from '@nestjs/testing';

import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';

describe('MaterialController', () => {
  let materialController: MaterialController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MaterialController],
      providers: [MaterialService],
    }).compile();

    materialController = app.get<MaterialController>(MaterialController);
  });

  describe('root', () => {
    it('should return an array', () => {
      expect(materialController.getMaterials()).toBeArray();
      expect(materialController.getMaterials().length).toBeGreaterThan(1);
    });
  });
});
