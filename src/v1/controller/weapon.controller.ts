import { Body, Controller, Get, Post } from '@nestjs/common';
import { WeaponCreateDto } from '../dto/weapon-create.dto';
import { Weapon } from '../schema/weapon.schema';
import { WeaponService } from '../service/weapon.service';

/**
 * This class provides the controller to Weapon API
 */
@Controller('/api/v1/weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Get('/')
  async list(): Promise<Weapon[]> {
    return this.weaponService.list();
  }

  @Post('/')
  async create(@Body() data: WeaponCreateDto): Promise<Weapon> {
    try {
      return this.weaponService.create(data);
    } catch (e) {
      throw e;
    }
  }
}
