import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { ArticleComponent } from './components/blog_components/article/article.component';
import { MainBlogComponent } from './components/blog_components/main-blog/main-blog.component';
import { HeaderComponent } from './components/blog_components/header/header.component';
import { ArticlePreviewComponent } from './components/blog_components/article-preview/article-preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    ArticleComponent,
    MainBlogComponent,
    HeaderComponent,
    ArticlePreviewComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
