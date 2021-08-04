import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  availableSides = [{display: 'None', value: ''}, {display: 'Light', value: 'light'},{display: 'Dark', value: 'dark'}]
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    // store service in the property of the component 
    this.swService = swService;
  }

   onSubmit(submittedForm: any) {
     if (submittedForm.invalid) {
       return;
     }
     this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
   }   
}
