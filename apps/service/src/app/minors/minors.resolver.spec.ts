import { Test, TestingModule } from '@nestjs/testing';
import { MinorsResolver } from './minors.resolver';

describe('MinorsResolver', () => {
  let resolver: MinorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinorsResolver],
    }).compile();

    resolver = module.get<MinorsResolver>(MinorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
