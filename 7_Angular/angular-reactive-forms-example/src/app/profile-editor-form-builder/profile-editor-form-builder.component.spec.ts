import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFormBuilderComponent } from './profile-editor-form-builder.component';

describe('ProfileEditorFormBuilderComponent', () => {
  let component: ProfileEditorFormBuilderComponent;
  let fixture: ComponentFixture<ProfileEditorFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditorFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
