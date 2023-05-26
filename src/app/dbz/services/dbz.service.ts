import { Injectable } from "@angular/core";
import {v4 as uuid} from 'uuid';
import { character } from "../interfaces/character.interface";



@Injectable({providedIn:'root'})

export class dbzService{
    public characters:character[]=[{
        id:uuid(),
        name:'krillin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },{
        id:uuid(),
        name:'Vegeta',
        power:7000
    }];

    addCharacter(character:character):void{
        const newCharacter:character={id:uuid(),...character}
        this.characters.push(character)
    }

    onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    }

    deleteCharacterById(id:string){
        this.characters=this.characters.filter(character=>character.id!==id)
    }
}
