import { Component, OnInit } from '@angular/core';

// zaimportowanie klasy FormBuilder
import { FormBuilder } from '@angular/forms';

// import klasy Validators
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-form-builder',
  templateUrl: './profile-editor-form-builder.component.html',
  styleUrls: ['./profile-editor-form-builder.component.css']
})
export class ProfileEditorFormBuilderComponent  {
  // stworzenie instancji BudowniczegoFormularzy + metoda group oraz zdefiniowanie właściwości modelu // tu wartości są przechowywane w formie tablic
  profileForm = this.fb.group({
    // dodanie walidacji do elementu formularza
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  // wstrzyknięcie serwisu FormBuildera
  constructor(private fb: FormBuilder) { }

  // onSubmit() przechwytuje dane z formularza
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  // metoda odpowiadająca za aktualizację wartości formularza wykorzystując patchValue()
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Mike',
      address: {
        street: '123 Tatooine'
      }
    });
  }

}
