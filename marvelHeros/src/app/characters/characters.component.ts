import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSVC: CharactersApiService) { }
  allCharacters : Observable<any>;
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSVC.getAllCharacters();
  }

}
