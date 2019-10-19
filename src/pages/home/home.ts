import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  notes;
  //ilustra a injeção de dependência
  //é um tipo de inversão de controle
  constructor(public navCtrl: NavController, public noteService: NoteService) {
    this.notes = this.noteService.notes;
  }

  onItemClick (note){
    //console.log ('item-click', note);
    this.navCtrl.push ('DetailPage', {noteParam: note });
  }

}
