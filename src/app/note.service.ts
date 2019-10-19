export class NoteService{
    notes = [
        {
          id: '1',
          date: '2016-02-01',
          title: 'Firebase',
          content: "Que tal programar serverless?" 
        },
        {
          id: '2',
          date: '2016-02-03',
          title: "Ionic",
          content: "Aprenda o básico de Ionic"
        },
        {
          id: "3",
          date: '2016-08-01',
          title: "Angular",
          content: "Importante para desenvolver com Ionic"
        }
      ]
    
    removeNote (note){
        let index = this.notes.indexOf (note);
        if (index > -1){
            this.notes.splice(index, 1);
        }
    }
}