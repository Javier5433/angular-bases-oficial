import { Component,EventEmitter,Input,Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:character[]=[{
    name:'Trunks',
    power:10
  },{
    name:'Goku',
    power:10000
  }]
  onDeleteCharacter(id?:string):void{
    this.onDelete.emit(id)
  }
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter()
}
