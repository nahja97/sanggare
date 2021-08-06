import { Test, TestingModule } from '@nestjs/testing';
import { MajorsResolver } from './majors.resolver';

describe('MajorsResolver', () => {
  let resolver: MajorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorsResolver],
    }).compile();

    resolver = module.get<MajorsResolver>(MajorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
