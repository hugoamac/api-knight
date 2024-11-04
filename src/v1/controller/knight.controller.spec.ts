import { Test, TestingModule } from '@nestjs/testing';
import { KnightController } from './knight.controller';

describe(KnightController.name, () => {
  let controller: KnightController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KnightController],
      providers: [],
    }).compile();

    controller = app.get<KnightController>(KnightController);
  });

  it('should return list of knights', () => {
    //arrange

    //act
    const act = controller.list();
    //assert
    expect(act).toContain('lista de knight');
  });
});
