import { Materia } from "./materia";

export class Alumno {
    private id:number = 0;
    private static ids:number = 1;
    private nombre:string = "";
    private apellido:string = "";
    private materias:Map<Materia,number>;

    constructor(nombre:string, apellido:string){
        this.id = Alumno.ids;
        this.nombre = nombre;
        this.apellido = apellido;
        this.materias = new Map<Materia,number>();
        Alumno.ids++;
    }

    public getId():number {
        return this.id;
    }

    public getNombre():string {
        return this.nombre;
    }

    public getApellido():string {
        return this.apellido;
    }

    public getMaterias():Map<Materia, number>{
        return this.materias;
    }

    public setMateria(materia:Materia):void{
        this.materias.set(materia, 0);
    }

    public setNotaMateria(materia: Materia, nota: number):void{
        this.materias.set(materia, nota);
    }

    public toString(): string {
        let cadena: string = "";
        cadena += "\n***************************";
        cadena += "\nID: " + this.getId();
        cadena += "\nNombre: " + this.getNombre();
        cadena += "\nApellido: " + this.getApellido();
        cadena += "\n\nASIGNATURAS CON NOTA\n=====================\n"
        for (let [materia,nota] of this.materias){
            if (nota != 0){
                cadena += "\nID: " + materia.getId();
                cadena += "\nNombre: " + materia.getNombre();
                cadena += "\nNota: " + nota; 
            }
        }
        cadena += "\n\n***************************";
        return cadena;
    }
}