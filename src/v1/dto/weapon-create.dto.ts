/**
 * This class provides the dto to create it one weapon model.
 */
export class WeaponCreateDto {
  name: string;
  attr: string;
  mod: number;
  equipped = false;
}
