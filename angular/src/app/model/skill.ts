export class Skill {
    id!:number;
    nameSkill:string;
    typeSoft:boolean ;
    typeHard:boolean ;
    skillDomain:number;

    constructor(
        nameSkill:string,
        typeSoft:boolean,
        typeHard:boolean,
        skillDomain:number
    ){
        this.nameSkill = nameSkill;
        this.skillDomain = skillDomain;
        this.typeSoft = typeSoft;
        this.typeHard = typeHard;
    }
}
