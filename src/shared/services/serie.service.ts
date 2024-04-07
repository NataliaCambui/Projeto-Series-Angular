import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Observable, Subject } from 'rxjs';
import { ResponseSerie } from '../models/responseSerie.model';

@Injectable({
  providedIn: 'root'
})

export class SerieService {

  private apiUrl = 'https://localhost:7294'
  seriesUrl: Serie[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getSeries() {
    return this.httpClient.get<ResponseSerie<Serie[]>>(`${this.apiUrl}/api/Serie/getAll`)
  }

}
