import { Component, OnInit } from '@angular/core';
import {NecessiteuxService} from "../../../services/necessiteux.service";
import {Router} from "@angular/router";
import {NecessiteuxModel} from "../../../models/necessiteux.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  necessiteux: NecessiteuxModel = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    typeAide: ''

  };
  submitted = false;
  actionButton: any="walo";

  constructor(private service:NecessiteuxService,private router: Router) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      firstName: this.necessiteux.firstName,
      lastName: this.necessiteux.lastName,
      address: this.necessiteux.address,
      phoneNumber: this.necessiteux.phoneNumber,
      email: this.necessiteux.email,
      description: this.necessiteux.description,
      typeAide: this.necessiteux.typeAide
    };
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/dashboard']);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });


  }
  newTutorial(): void {
    this.submitted = false;
    this.necessiteux = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
      typeAide: ''
    };
  }

  money() {
    this.necessiteux.typeAide = "NEEDMONEY";
    console.log(this.necessiteux.typeAide);
  }

  clothes() {
    this.necessiteux.typeAide = "NEEDCLOTHES";
    console.log(this.necessiteux.typeAide);
  }

  food() {
    this.necessiteux.typeAide = "NEEDFOOD";
    console.log(this.necessiteux.typeAide);
  }
}
