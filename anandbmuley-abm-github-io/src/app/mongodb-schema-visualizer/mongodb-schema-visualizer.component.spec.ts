import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbSchemaVisualizerComponent } from './mongodb-schema-visualizer.component';

describe('MongodbSchemaVisualizerComponent', () => {
  let component: MongodbSchemaVisualizerComponent;
  let fixture: ComponentFixture<MongodbSchemaVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbSchemaVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbSchemaVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
