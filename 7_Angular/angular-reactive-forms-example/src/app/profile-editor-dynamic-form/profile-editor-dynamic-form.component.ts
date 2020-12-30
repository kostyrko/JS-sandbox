import { Component, OnInit } from '@angular/core';

// zaimportowanie klasy FormBuilder
import { FormBuilder } from '@angular/forms';
// import klasy Validators
import { Validators } from '@angular/forms';

// zaimportowanie klasy FormArray
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor-dynamic-form',
  templateUrl: './profile-editor-dynamic-form.component.html',
  styleUrls: ['./profile-editor-dynamic-form.component.css']
})
export class ProfileEditorDynamicFormComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  // wstrzyknięcie serwisu FormBuildera
  constructor(private fb: FormBuilder) { }

  // metoda do pozyskania (zwraca) aliasów w formie tablicy, tworzy właściwość "aliasy" dla klasy komponentu pozwalającą na pracę z danymi w tablicy
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // metoda służąca do dodania nowych elementów do tablicy aliasów
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  // onSubmit() przechwytuje dane z formularza
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
