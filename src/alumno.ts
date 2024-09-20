import { Materia } from "./materia";

export class Alumno {
    private id:number = 0;
    private static ids:number = 1;
    private nombre:string = "";
    private apellido:string = "";
    private materias:Array<Materia> = [];

    constructor(nombre:string, apellido:string){
        this.id = Alumno.ids;
        this.nombre = nombre;
        this.apellido = apellido;
        this.materias = [];
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

    public getMaterias():Array<Materia>{
        return this.materias;
    }

    public setMateria(materia:Materia):void{
        this.materias.push(materia);
    }
}