import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  notes: Note[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.notesObserver.subscribe(
      notes => this.notes = notes
    );
    this._dataService.retrieveAll();
  }

}