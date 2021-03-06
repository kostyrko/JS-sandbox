import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// zaimportowanie modułu reaktywnych formularzy + dodanie do importów w dekoratorze
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorFormBuilderComponent } from './profile-editor-form-builder/profile-editor-form-builder.component';
import { ProfileEditorDynamicFormComponent } from './profile-editor-dynamic-form/profile-editor-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorFormBuilderComponent,
    ProfileEditorDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
