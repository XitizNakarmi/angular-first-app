import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);
