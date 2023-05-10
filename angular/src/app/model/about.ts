export class About {
    id:number;
    tittleAbout!: string;
    descriptionAbout!: string;

    constructor(tittleAbout: string,
        descriptionAbout: string){
            this.tittleAbout = tittleAbout;
            this.descriptionAbout = descriptionAbout;
        }
}
