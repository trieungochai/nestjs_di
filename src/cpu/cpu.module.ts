import { Module } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { CpuService } from './cpu.service';

@Module({
  imports: [PowerService],
  providers: [CpuService],
})
export class CpuModule {}
