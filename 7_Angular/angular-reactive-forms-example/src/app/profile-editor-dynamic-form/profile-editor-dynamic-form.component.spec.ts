import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorDynamicFormComponent } from './profile-editor-dynamic-form.component';

describe('ProfileEditorDynamicFormComponent', () => {
  let component: ProfileEditorDynamicFormComponent;
  let fixture: ComponentFixture<ProfileEditorDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditorDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
