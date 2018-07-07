import { ElectronicsportsApiModule } from './electronicsports-api.module';

describe('ElectronicsportsApiModule', () => {
  let electronicsportsApiModule: ElectronicsportsApiModule;

  beforeEach(() => {
    electronicsportsApiModule = new ElectronicsportsApiModule();
  });

  it('should create an instance', () => {
    expect(electronicsportsApiModule).toBeTruthy();
  });
});
