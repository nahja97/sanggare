import { Test, TestingModule } from '@nestjs/testing';
import { SinglesResolver } from './singles.resolver';

describe('SinglesResolver', () => {
  let resolver: SinglesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SinglesResolver],
    }).compile();

    resolver = module.get<SinglesResolver>(SinglesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
