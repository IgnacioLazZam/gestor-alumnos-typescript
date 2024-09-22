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
            console.log("ID: " + alumno.getId() + " || " + " Nombre: " + 
                alumno.getNombre() + " || " + " Apellido: " + alumno.getApellido());
        }
    }

    public asignarMateria(idAlumno:number, materia:Materia){
        for(let alumno of this.alumnos){
            if (alumno.getId()==idAlumno){
                alumno.setMateria(materia);
            }
        }
    }

    public listarMateriasAlumno(idAlumno: number){
        console.log("LISTADO DE MATERIAS DEL ALUMNO CON ID: " + idAlumno + "\n");
        for(let alumno of this.alumnos){
            if (alumno.getId() == idAlumno){
                if (alumno.getMaterias().size == 0){
                    console.log("No tiene materias asignadas.")
                } else {
                    for (let [materia,valor] of alumno.getMaterias()){
                        if (valor == 0){
                            console.log("ID: " + materia.getId() + " || " + " Nombre: " + materia.getNombre()
                    + "--> Nota: " + "No tiene nota")
                        } else {
                            console.log("ID: " + materia.getId() + " || " + " Nombre: " + materia.getNombre()
                    + "--> Nota: " + valor)
                        }
                       
                    }
                    
                }
                
            }
        }
    }

    public asignarNotaAMateriaAlumno(){
        this.listarAlumnos();
        console.log("Elija un alumno por id: ")
        let idAlumno = parseInt(readline.prompt());
        this.listarMateriasAlumno(idAlumno)
        console.log("Elija materia por id: ")
        let idMateria = parseInt(readline.prompt());
        console.log("Indique nota de la asignatura: ")
        let notaAsignada = parseInt(readline.prompt());
        for (let alumno of this.alumnos){
            for (let [materia, nota] of alumno.getMaterias()){
                 if (alumno.getId() == idAlumno && materia.getId() == idMateria){
                    alumno.setNotaMateria(materia, notaAsignada);
                }
            }
           
        }
        
    }

    public listarAlumnosConNota(){
        let arrayAlumnosConNota = [];
        for (let alumnno of this.alumnos){
            for (let [materia, valor] of alumnno.getMaterias()){
                if (valor!=0)
                arrayAlumnosConNota.push(alumnno);
            }
        }
        if (arrayAlumnosConNota.length == 0){
            console.log("No hay ningun alumno con nota")
        } else {
            for (let alumno of arrayAlumnosConNota){
                console.log(alumno.toString());
            }
        }
        
    }


}