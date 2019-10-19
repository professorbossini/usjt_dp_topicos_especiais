import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;
  constructor(public navCtrl: NavController, 
                    public navParams: NavParams,
                      public noteService: NoteService,
                      public alertCtrl: AlertController) {
    this.note = this.navParams.get("noteParam");
    console.log('nav-param', this.note);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  onTrash(){
    let confirm = this.alertCtrl.create(
      {
        title: "Delete?",
        message: `Tem certeza que você quer apagar a nota: "${this.note.title}"?`,
        buttons: [
          {
            text: "Cancelar"
          },
          {
            text: "Confirmar",
            handler: () => {
              this.noteService.removeNote(this.note);
              this.navCtrl.pop();
            }
          }
        ]
      }
    );
    confirm.present();      
  }
}
