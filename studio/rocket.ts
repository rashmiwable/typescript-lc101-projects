import { Astronaut } from "./astronaut";
import{Cargo }from "./cargo";
import{Payload} from "./Payload";
  
  export class Rocket {

    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo []=[];
    astronauts: Astronaut[]=[];

    constructor(name: string,totalCapacityKg:number){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
    }
    sumMass(items: Payload[]): number{
        let myTotalMass = 0;
        for(let i = 0 ; i< items.length; i++){
            myTotalMass+= items[i].massKg;
        }
    return myTotalMass;
    }

    currentMassKg(): number{

           let cargoMassTotal = this.sumMass(this.cargoItems);
        let astronautMassTotal = this.sumMass(this.astronauts);
        let massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    }

    canAdd( item: Payload):boolean{
        return this.currentMassKg()+item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean{

        let boolCanAddCargo : boolean;

        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            boolCanAddCargo = true;
        }
        else {
            boolCanAddCargo = false;
        }
        return boolCanAddCargo;
    }

    addAstronaut(astronaut:Astronaut):boolean {
        let boolCanAddAstro : boolean;

        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            boolCanAddAstro = true;
        }
        else {
            boolCanAddAstro = false;
        }
        return boolCanAddAstro;
    }
 }
        