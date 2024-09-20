export class Materia{
    private static ids:number = 1;
    private id:number = 0;
    private nombre:string = "";

    constructor(nombre:string){
        this.id = Materia.ids;
        this.nombre = nombre;
        Materia.ids++;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }
}