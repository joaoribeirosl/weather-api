import { Test, TestingModule } from '@nestjs/testing';
import { GetUserCoordinationsService } from './get-user-coordinations.service';

describe('GetUserCoordinationsService', () => {
  let service: GetUserCoordinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserCoordinationsService],
    }).compile();

    service = module.get<GetUserCoordinationsService>(GetUserCoordinationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
