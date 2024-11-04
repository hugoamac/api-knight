import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WeaponDocument = HydratedDocument<Weapon>;

@Schema()
export class Weapon {
  @Prop()
  name: string;

  @Prop()
  mod: number;

  @Prop()
  attr: string;

  @Prop({ default: false })
  equipped: boolean;
}

export const WeaponSchema = SchemaFactory.createForClass(Weapon);
