import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter<character>=new EventEmitter();
  
  
  public character: character= {
    name:'',
    power:0
  }

  emitCharacter():void{
    console.log(this.character)
    if (this.character.name.length===0) return;
    this.onNewCharacter.emit(this.character)
    
    this.character={name:'',power:0}
  }
}
