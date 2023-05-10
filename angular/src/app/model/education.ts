export class Education {
    id: number;
    tittle?: string;
    instituteName?: string;
    instituteLogo?: string;
    instituteCertification?: string;
    startActivityDate?: Date;
    endActivityDate?: Date;
    descriptionOptional?: string;

    constructor(tittle: string,
        instituteName: string,
        instituteLogo: string,
        instituteCertification: string,
        startActivityDate: Date,
        endActivityDate: Date,
        descriptionOptional: string){
            this.tittle = tittle;
            this.instituteName = instituteName;
            this.instituteLogo = instituteLogo;
            this.instituteCertification = instituteCertification;
            this.startActivityDate = startActivityDate;
            this.endActivityDate = endActivityDate;
            this.descriptionOptional = descriptionOptional;
        }
}
