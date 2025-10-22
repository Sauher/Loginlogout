import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit{
  @Input() severity:string = "info";
  @Input() title:string = "";
  @Input() msg:string = "";
  @Input() icon:string = "";


  ngOnInit(): void {
    switch(this.severity){
      case 'info': this.icon = "bi bi-info-circle-fill"
      break;
      case 'danger': this.icon = "bi bi-exclamation-square-fill"
      break;
      case 'success': this.icon = "bi bi-check-square-fill"
      break;
      case 'warning': this.icon = "bi bi-exclamation-square-fill"
      break;
    }
  }
}
