export class Person{
    //id? EL SIMBOLO DE ? ESTA PARA DECIR QUE NO ES NECESARIO ESTE DATO, EN EL CONSTRUCTOR
    id?: number;
    name: string;
    lastName : string;

    constructor(name:string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    };
}