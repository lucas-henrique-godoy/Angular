import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Wendel";

  userData = {
    email: "wendel@email.com",
    role: "Admin"
  }
  
  title = 'curso-angular';
}
