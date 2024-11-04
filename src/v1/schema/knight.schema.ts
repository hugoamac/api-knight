import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Weapon } from './weapon.schema';
import { Attribute } from './attribute.schema';

export type KnightDocument = HydratedDocument<Knight>;

@Schema()
export class Knight {
  @Prop()
  name: string;

  @Prop()
  nickname: string;

  @Prop()
  birthday: Date;

  @Prop()
  attack: number;

  @Prop()
  experience: number;

  @Prop()
  weapons: Weapon[];

  @Prop()
  attibutes: Attribute[];
}

export const KnightSchema = SchemaFactory.createForClass(Knight);
