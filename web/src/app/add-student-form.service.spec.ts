import { TestBed } from '@angular/core/testing';
import { AddStudentFormService } from './add-student-form.service';

describe('AddStudentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStudentFormService = TestBed.get(AddStudentFormService);
    expect(service).toBeTruthy();
  });
});
