import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    this.powerService.supplyPower(100);
    return a + b;
  }
}
