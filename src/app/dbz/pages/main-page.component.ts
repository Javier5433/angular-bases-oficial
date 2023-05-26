import { Component } from "@angular/core";
import { character } from "../interfaces/character.interface";
import { dbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl:'./main-page.component.html'
})
export class NameComponent {
    constructor(public dbzService:dbzService){}

    get characters():character[]{
        return this.dbzService.characters;
    }
    onDeleteCharacter(Id:string):void{
        this.dbzService.deleteCharacterById(Id)
    }
    onNewCharacter(character:character){
        this.dbzService.addCharacter(character)
    }
}


     
   