import { Test, TestingModule } from '@nestjs/testing';
import { SinglesService } from './singles.service';

describe('SinglesService', () => {
  let service: SinglesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SinglesService],
    }).compile();

    service = module.get<SinglesService>(SinglesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
