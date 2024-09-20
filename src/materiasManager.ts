import { Materia } from "./materia";
import * as readline from 'readline-sync';

export class MateriasManager{
    private materias: Materia[];

    constructor(arrayMaterias: Materia[]){
        this.materias = arrayMaterias;
    }

    public crearMateria(){
        console.log("Escriba nombre de la materia: ")
        let nombre = readline.prompt();
        this.materias.push(new Materia(nombre));
    }

    public listarMaterias(): void {
        console.log("\nLISTADO DE MATERIAS\n===================")
        for (let materia of this.materias){
            console.log("ID: " + materia.getId() + " Nombre: " + 
                materia.getNombre());
        }
    }
}