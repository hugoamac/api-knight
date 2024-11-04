import { Injectable } from '@nestjs/common';
import { Weapon } from '../schema/weapon.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WeaponCreateDto } from '../dto/weapon-create.dto';

@Injectable()
export class WeaponService {
  constructor(
    @InjectModel(Weapon.name)
    private weaponModel: Model<Weapon>,
  ) {}

  /**
   * This method provides the service to create a new weapon.
   * @param data
   */
  async create(data: WeaponCreateDto): Promise<Weapon> {
    const model = new this.weaponModel({
      name: data?.name,
      attr: data?.attr,
      mod: data?.mod,
      equipped: data?.equipped,
    });

    return model.save();
  }

  /**
   * This method provides the service to get the weapon list.
   * @returns
   */
  async list(): Promise<Weapon[]> {
    return this.weaponModel.find();
  }
}
