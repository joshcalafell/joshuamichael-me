import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
