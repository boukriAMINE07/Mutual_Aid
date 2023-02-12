import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NecessiteuxModel} from "../models/necessiteux.model";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8081/necessiteux';
@Injectable({
  providedIn: 'root'
})
export class NecessiteuxService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<NecessiteuxModel[]> {
    return this.http.get<NecessiteuxModel[]>(baseUrl);
  }
  get(id: any): Observable<NecessiteuxModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: NecessiteuxModel): Observable<NecessiteuxModel> {

    return this.http.post(baseUrl, data);
  }
}
