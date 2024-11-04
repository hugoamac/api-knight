import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttributeCreateDto } from '../dto/attribute-create.dto';
import { Attribute } from '../schema/attribute.schema';
import { AttributeService } from '../service/attribute.service';

/**
 * This class provides the controller to Attribute API
 */
@Controller('/api/v1/attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Get('/')
  async list(): Promise<Attribute[]> {
    return this.attributeService.list();
  }

  @Post('/')
  async create(@Body() data: AttributeCreateDto): Promise<Attribute> {
    try {
      return this.attributeService.create(data);
    } catch (e) {
      throw e;
    }
  }
}
