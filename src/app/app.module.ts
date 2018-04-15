import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './heading/heading.component';
import { AdminComponent } from './admin/admin.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostPreviewComponent } from './new-post/new-post.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule , MatTabsModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

//Froala
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NavigationComponent } from './navigation/navigation.component';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    HeadingComponent,
    AdminComponent,
    NewPostComponent,
    NavigationComponent,
    NewPostPreviewComponent,
    FooterComponent,
    PostCategoryComponent,
    PostComponent,
  
  

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
   MatDialogModule,
   ReactiveFormsModule,
   FormsModule,


   FroalaEditorModule.forRoot(),
   FroalaViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewPostComponent,
    NewPostPreviewComponent
]
})
export class AppModule { }
