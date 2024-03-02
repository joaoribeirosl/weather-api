import { Test, TestingModule } from '@nestjs/testing';
import { GetWeatherService } from './get-weather.service';

describe('GetWeatherService', () => {
  let service: GetWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetWeatherService],
    }).compile();

    service = module.get<GetWeatherService>(GetWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
