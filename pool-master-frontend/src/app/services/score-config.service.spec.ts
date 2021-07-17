import { TestBed } from '@angular/core/testing';

import { ScoreConfigService } from './score-config.service';

describe('ScoreConfigService', () => {
  let service: ScoreConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
