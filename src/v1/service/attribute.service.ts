import { Injectable } from '@nestjs/common';
import { Attribute } from '../schema/attribute.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttributeCreateDto } from '../dto/attribute-create.dto';

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel(Attribute.name)
    private attributeModel: Model<Attribute>,
  ) {}

  /**
   * This method provides the service to create a new attribute.
   * @param data
   */
  async create(data: AttributeCreateDto): Promise<Attribute> {
    const model = new this.attributeModel({
      name: data?.name,
    });

    return model.save();
  }

  /**
   * This method provides the service to get the attribute list.
   * @returns
   */
  async list(): Promise<Attribute[]> {
    return this.attributeModel.find();
  }
}
