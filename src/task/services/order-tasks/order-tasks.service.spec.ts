import { Test, TestingModule } from '@nestjs/testing';
import { OrderTasksService } from './order-tasks.service';

describe('OrderTasksService', () => {
  let service: OrderTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTasksService],
    }).compile();

    service = module.get<OrderTasksService>(OrderTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
