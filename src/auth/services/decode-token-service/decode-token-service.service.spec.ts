import { Test, TestingModule } from '@nestjs/testing';
import { DecodeTokenServiceService } from './decode-token-service.service';

describe('DecodeTokenServiceService', () => {
  let service: DecodeTokenServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecodeTokenServiceService],
    }).compile();

    service = module.get<DecodeTokenServiceService>(DecodeTokenServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
