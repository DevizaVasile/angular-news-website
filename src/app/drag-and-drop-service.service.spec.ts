import { TestBed, inject } from '@angular/core/testing';

import { DragAndDropServiceService } from './drag-and-drop-service.service';

describe('DragAndDropServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragAndDropServiceService]
    });
  });

  it('should be created', inject([DragAndDropServiceService], (service: DragAndDropServiceService) => {
    expect(service).toBeTruthy();
  }));
});
