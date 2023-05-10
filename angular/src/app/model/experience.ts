export class Experience {
    id!: number;
    positionTitle!:String;
    companyLogo!:String;
    descriptionOfActivities!:String;
    startActivityDate!: Date;
    endActivityDate!: Date;

    constructor(
        positionTitle:string,
        companyLogo:string,
        descriptionOfActivities:string,
        startActivityDate: Date,
        endActivityDate: Date
        ) {
        this.positionTitle = positionTitle;
        this.companyLogo = companyLogo;
        this.descriptionOfActivities = descriptionOfActivities;
        this.startActivityDate = startActivityDate;
        this.endActivityDate = endActivityDate;
    }
}
