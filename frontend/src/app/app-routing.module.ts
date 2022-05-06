import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './components/blog_components/main-blog/main-blog.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { LoginComponent } from 'src/app/components/login/login.component';




const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'main', component: MainBlogComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
