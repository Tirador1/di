import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
    private powerService: PowerService,
  ) {}

  @Get('compute')
  compute(): number {
    return this.cpuService.compute(1, 2);
  }

  @Get('disk')
  getDisk(): number {
    return this.diskService.compute(1, 2);
  }

  @Get('power')
  getPower(): string {
    return this.powerService.supplyPower(100);
  }
}
