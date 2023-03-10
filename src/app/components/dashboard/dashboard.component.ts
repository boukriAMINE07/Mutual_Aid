import { Component, OnInit } from '@angular/core';
import {NecessiteuxService} from "../../services/necessiteux.service";
import {NecessiteuxModel} from "../../models/necessiteux.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // array int  in typescript
  intArray!: number[] ;
  //math.random
  necessiteux:NecessiteuxModel[] = [];
  NEED_CLOTHES: string="NEED_CLOTHES";
  NEED_FOOD: string="NEED_FOOD";
  NEED_MONEY: string="NEED_MONEY";


  constructor(private necessiteuxService:NecessiteuxService) {

  }

  ngOnInit(): void {
    this.intArray = [0,1,2,3,4,5,6,7,8,9,10];
    this.getAllNecessiteux()


  }
  getAllNecessiteux(){
    this.necessiteuxService.getAll().subscribe(
      data => {
        this.necessiteux = data;
      },
      error => {
        console.log(error);
      });
  }

  filtrer(str:string){
    this.necessiteuxService.findByType(str).subscribe(
      data =>
    {
      this.necessiteux = data;
    }
    );
  }

}
