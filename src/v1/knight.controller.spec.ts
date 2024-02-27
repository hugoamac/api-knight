import { Test, TestingModule } from '@nestjs/testing';
import { KnightController } from './knight.controller';

describe('AppController', () => {
  let controller: KnightController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KnightController],
      providers: [],
    }).compile();

    controller = app.get<KnightController>(KnightController);
  });

  describe('root', () => {
    it('should return list of knights', () => {
      //arrange

      //act
      const act = controller.list();
      //assert
      expect(act).toContain('lista de knight');
    });
  });
});
