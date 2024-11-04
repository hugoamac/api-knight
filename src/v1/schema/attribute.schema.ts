import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AttributeDocument = HydratedDocument<Attribute>;

@Schema()
export class Attribute {
  @Prop({ required: true })
  name: string;
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);
