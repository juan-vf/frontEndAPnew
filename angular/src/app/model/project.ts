export class Project {
    id?: number;
    nameProject: string;
    descriptionProject: string;
    linkProject: string;
    startActivityDate: Date;
    endActivityDate: Date;
    imagesProject: Array<string>;

    constructor(
        nameProject: string,
        descriptionProject: string,
        linkProject: string,
        startActivityDate: Date,
        endActivityDate: Date,
        imagesProject: Array<string>
    ){
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
        this.linkProject = linkProject;
        this.startActivityDate = startActivityDate;
        this.endActivityDate = endActivityDate;
        this.imagesProject = imagesProject;
    }
}
