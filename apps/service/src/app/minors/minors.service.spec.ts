import { Test, TestingModule } from '@nestjs/testing';
import { MinorsService } from './minors.service';

describe('MinorsService', () => {
  let service: MinorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinorsService],
    }).compile();

    service = module.get<MinorsService>(MinorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
