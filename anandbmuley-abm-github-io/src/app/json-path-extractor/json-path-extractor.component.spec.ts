import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPathExtractorComponent } from './json-path-extractor.component';

describe('JsonPathExtractorComponent', () => {
  let component: JsonPathExtractorComponent;
  let fixture: ComponentFixture<JsonPathExtractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPathExtractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPathExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
