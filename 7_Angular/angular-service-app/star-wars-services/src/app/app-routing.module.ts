import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [ 
  {path: '', component: TabsComponent},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  // registers routes in the angular router module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
