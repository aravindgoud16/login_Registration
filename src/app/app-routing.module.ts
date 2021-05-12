import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { FinalComponent } from './final/final.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  // Fallback when no prior route is matched
  // { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' },
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'final',component:FinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
