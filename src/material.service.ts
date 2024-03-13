import { Injectable } from '@nestjs/common';
import { MATERIALS } from './data/materials';

@Injectable()
export class MaterialService {
  getMaterials(): any {
    return Object.values(MATERIALS);
  }
}
