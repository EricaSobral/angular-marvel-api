import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY ='01eb95846e0e89e087d016a899bc999f';
  timeStamp ='16338095661'
  HASH = '2b07d0e2ca61a1980e8edc5770fcb77e';
  
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor( private http: HttpClient) { }

  getAllCharacters() : Observable<any>{
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data))
  }
}
