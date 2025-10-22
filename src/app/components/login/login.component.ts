import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { ApiService } from '../../services/api.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(
  private api: ApiService,
  private message : MessageService
 ){}
  login(){
    this.message.show('danger','hiba', "Nem adtál meg minden adatot")
  }
}
