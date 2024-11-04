import { Controller, Get } from '@nestjs/common';

/**
 * This class provides the controller to Knight API
 */
@Controller('/api/v1/knight')
export class KnightController {
  @Get('/')
  list(): string[] {
    return ['lista de knight'];
  }
}
