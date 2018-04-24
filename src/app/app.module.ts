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
import { DragAndDropTagsComponent } from './drag-and-drop-tags/drag-and-drop-tags.component';

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

//firebase credentials
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { TagEditorComponent } from './tag-editor/tag-editor.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



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
    TagEditorComponent,
  
  
  

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
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule,


   FroalaEditorModule.forRoot(),
   FroalaViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewPostComponent
]
})
export class AppModule { }
