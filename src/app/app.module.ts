import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';

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
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

//Froala
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NavigationComponent } from './navigation/navigation.component';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostComponent } from './post/post.component';
import {MatInputModule} from '@angular/material/input';
import { DragAndDropTagsComponent } from './drag-and-drop-tags/drag-and-drop-tags.component';

import {DragAndDropService} from "./drag-and-drop.service"



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    HeadingComponent,
    AdminComponent,
    NewPostComponent,
    NavigationComponent,
    FooterComponent,
    PostCategoryComponent,
    PostComponent,
    DragAndDropTagsComponent,
  
  
  

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
   MatFormFieldModule,
   MatInputModule,
   DndModule.forRoot(),


   FroalaEditorModule.forRoot(),
   FroalaViewModule.forRoot()

  ],
  providers: [DragAndDropService],
  bootstrap: [AppComponent],
  entryComponents: [
    NewPostComponent
]
})
export class AppModule { }
