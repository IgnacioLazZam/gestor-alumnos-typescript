import { Alumno } from "./alumno";
import { Materia } from "./materia";
import * as readline from 'readline-sync';

export class AlumnosManager{

    private alumnos: Alumno[];

    constructor(arrayAlumnos: Alumno[]){
        this.alumnos = arrayAlumnos;
    }

    public crearAlumno(){
        console.log("Escriba nombre: ")
        let nombre = readline.prompt();
        console.log("Escriba apellido: ")
        let apellido = readline.prompt();
        this.alumnos.push(new Alumno(nombre, apellido));
    }

    public listarAlumnos(): void {
        console.log("\nLISTADO DE ALUMNOS\n==================")
        for (let alumno of this.alumnos){
            console.log("ID: " + alumno.getId() + " Nombre: " + 
                alumno.getNombre() + " Apellido: " + alumno.getApellido());
        }
    }

    public asignarMateria(idAlumno:number, materia:Materia){
        for(let alumno of this.alumnos){
            if (alumno.getId()==idAlumno){
                alumno.setMateria(materia);
            }
        }
    }


}