import { Module } from '@nestjs/common';
import { KnightController } from './controller/knight.controller';
import { AttributeController } from './controller/attribute.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attribute, AttributeSchema } from './schema/attribute.schema';
import { AttributeService } from './service/attribute.service';
import { Weapon, WeaponSchema } from './schema/weapon.schema';
import { Knight, KnightSchema } from './schema/knight.schema';
import { WeaponService } from './service/weapon.service';
import { WeaponController } from './controller/weapon.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attribute.name, schema: AttributeSchema },
      { name: Weapon.name, schema: WeaponSchema },
      { name: Knight.name, schema: KnightSchema },
    ]),
  ],
  controllers: [KnightController, AttributeController, WeaponController],
  providers: [AttributeService, WeaponService],
})
export class V1Module {}
