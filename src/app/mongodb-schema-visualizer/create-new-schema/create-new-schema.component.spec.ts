import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSchemaComponent } from './create-new-schema.component';

describe('CreateNewSchemaComponent', () => {
  let component: CreateNewSchemaComponent;
  let fixture: ComponentFixture<CreateNewSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
