import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY ='';
  HASH = '';
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor( private http: HttpClient) { }

  getAllCharacters() : Observable<any>{
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data))
  }
}
