import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './heading/heading.component';
import { AdminComponent } from './admin/admin.component';
import { NewPostComponent } from './new-post/new-post.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule , MatTabsModule } from '@angular/material';

//Froala
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    HeadingComponent,
    AdminComponent,
    NewPostComponent

  ],
  imports: [
    BrowserModule,
    routing,
    MatButtonModule,
    MatCardModule,
   MatMenuModule,
   MatToolbarModule,
   MatIconModule,
   MatTabsModule,
   BrowserAnimationsModule,

   FroalaEditorModule.forRoot(),
   FroalaViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
