import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class DataService {
  notesObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get('/notes').subscribe(
      notes => this.notesObserver.next(notes.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  createNote(note: Note) {
    console.log(note);
    this._http.post('/notes', note).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}