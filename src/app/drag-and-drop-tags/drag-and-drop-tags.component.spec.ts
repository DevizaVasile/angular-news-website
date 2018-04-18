import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropTagsComponent } from './drag-and-drop-tags.component';

describe('DragAndDropTagsComponent', () => {
  let component: DragAndDropTagsComponent;
  let fixture: ComponentFixture<DragAndDropTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
