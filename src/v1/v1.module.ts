import { Module } from '@nestjs/common';
import { KnightController } from './knight.controller';

@Module({
  controllers: [KnightController],
})
export class V1Module {}
