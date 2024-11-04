import { Test, TestingModule } from '@nestjs/testing';
import { AttributeController } from './attribute.controller';
import { AttributeService } from '../service/attribute.service';
import { AttributeServiceMock } from '../mocks/attribute.service.mock';

describe(AttributeController.name, () => {
  let controller: AttributeController;
  let service: AttributeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AttributeController],
      providers: [
        {
          provide: AttributeService,
          useClass: AttributeServiceMock,
        },
      ],
    }).compile();

    controller = app.get<AttributeController>(AttributeController);
    service = app.get<AttributeService>(AttributeService);
  });

  it('should return list of attributes', async () => {
    //arrange

    const resultListMock = [{ name: 'lista de attributos' }];

    jest.spyOn(service, 'list').mockResolvedValue(resultListMock);

    //act

    const act = await controller.list();
    //assert

    expect(service.list).toBeCalled();
    expect(act).toEqual(resultListMock);
  });
});
