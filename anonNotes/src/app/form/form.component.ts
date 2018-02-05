import { Component, OnInit} from '@angular/core';
import {Note} from '../note';
import { DataService } from './../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newNote: Note = new Note();

  constructor(private _dataService: DataService) { }
  
  onSubmit(){
    console.log(this.newNote);
    this._dataService.createNote(this.newNote);
    this.newNote = new Note();
  }

  ngOnInit() {
  }

}
