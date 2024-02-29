import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasksByUserService } from './get-all-tasks-by-user.service';

describe('GetAllTasksByUserService', () => {
  let service: GetAllTasksByUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllTasksByUserService],
    }).compile();

    service = module.get<GetAllTasksByUserService>(GetAllTasksByUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
