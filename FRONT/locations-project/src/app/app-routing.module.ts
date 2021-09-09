import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { CreateLocationComponent } from './locations/create-location/create-location.component';
import { ModifyLocationComponent } from './locations/modify-location/modify-location.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LocationsComponent },
  { path: 'create', component: CreateLocationComponent },
  { path: 'modify', component: ModifyLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
