import { Component, OnInit } from '@angular/core';
import {NecessiteuxService} from "../../../services/necessiteux.service";
import {NecessiteuxModel} from "../../../models/necessiteux.model";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentNecessiteux :NecessiteuxModel= {

  };
  constructor(private necessiteuxService:NecessiteuxService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getNeedById(this.route.snapshot.params['id']);
  }
  getNeedById(id:number){
    this.necessiteuxService.get(id).subscribe(
      data => {
        console.log(data);
        this.currentNecessiteux = data;
      },
      error => {
        console.log(error);
      });
  }


}
