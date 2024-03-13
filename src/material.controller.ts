import { Controller, Get } from '@nestjs/common';
import { MaterialService } from './material.service';

@Controller('/materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  getMaterials(): string {
    return this.materialService.getMaterials();
  }
}
