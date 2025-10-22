import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { NavItem } from '../../interface/navItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
 navItems: NavItem[] = [];

 ngOnInit(): void {
   this.setupMenu()
 }
 setupMenu(){
  this.navItems = [
    {name: 'Home', url: "/home" },
    {name: 'Login', url: "/login",icon: "bi bi-box-arrow-in-right" },
    {name: 'Registration', url: "/registration",icon: "bi bi-person-fill-add" }
  ]
 }
}
