
import * as readline from 'readline-sync';
import { AlumnosManager } from './alumnosManager';
import { Alumno } from './alumno';
import { Materia } from './materia';
import { MateriasManager } from './materiasManager';

function main(){

    const menu = ["Crear un alumno",
        "Listar Alumnos",
        "Crear una materia",
        "Listar materias",
        "Asignar una materia a un alumno",
        "Listar materias del alumno",
        "Asignar una nota a una materia de un alumno.",
        "Listar alumnos con nota"]

    
    let arrayAlumnos = [new Alumno("Ignacio", "Lázaro"),
                        new Alumno("David", "Solera"),
                        new Alumno("Eloy", "Leiva")
    ]

    let arrayMaterias = [new Materia("Lengua"),
                        new Materia("Física"),
                        new Materia("Química"),
                        new Materia("Matemáticas")
    ]

    let alumnosManager = new AlumnosManager(arrayAlumnos);
    let materiasManager = new MateriasManager(arrayMaterias);

    let x = 1;

    do {

        const indice = readline.keyInSelect(menu, 'Seleccione una operación: \n');

        if (indice===-1){
            console.log('Operación cancelada.');
            return;
        }

        switch(indice){
            case 0:
                alumnosManager.crearAlumno();
                break;
            case 1:
                alumnosManager.listarAlumnos();
                break;
            case 2:
                materiasManager.crearMateria();
                break;
            case 3:
                materiasManager.listarMaterias();
                break;
            case 4:
                alumnosManager.listarAlumnos();
                console.log("Elija alumnno por id: ")
                let idAlumno = readline.prompt();
                materiasManager.listarMaterias();
                console.log("Elija materia por id: ")
                let idMateria = readline.prompt();
                // for (let materia of arrayMaterias){
                //     if (materia.getId()==idMateria){
                //         let materiaAsign = materia;
                //     }
                    
                // }
                // alumnosManager.asignarMateria(idAlumno, idMateria);
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                x = 0;
                break;
        }
    
    } while (x!=0)

}
main();