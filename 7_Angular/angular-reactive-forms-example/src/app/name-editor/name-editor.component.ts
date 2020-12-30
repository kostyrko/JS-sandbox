import { Component, OnInit } from '@angular/core';
// zaimportowanie klasy KontroliFormularza
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  // stworzenie nowej instancji klasy odpowiedzialnej za kontrolę formularza
  name = new FormControl('');

  // metoda odpowiedzialna za programatyczną aktualizację formularza (wykorzystuje metodę setValue())
  updateName() {
    this.name.setValue('Nancy');
  }
}
