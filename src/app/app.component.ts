import { Component } from '@angular/core';



import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import * as FroalaEditor from "froala-editor/js/froala_editor.pkgd.min.js";
import { AuthServiceService } from "./auth-service.service"
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthServiceService,AngularFireAuth]
})
export class AppComponent {
  constructor(public auth:AuthServiceService, public router:Router)
  {

  }

  login() {
    this.auth.googleLogin().then((data) => {
      this.router.navigate(['admin']);
    })
  }

}
