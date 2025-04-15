import { TestBed } from '@angular/core/testing';

import { EditFormatValuesService } from './edit-format-values.service';

describe('EditFormatValuesService', () => {
  let service: EditFormatValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditFormatValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
