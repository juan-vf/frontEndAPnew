export class Languaje {
    id: number;
    languaje: string;
    lanjuageDomain: string;
    lanjuageDomainNumber: number;

    constructor(
        languaje: string, 
        lanjuageDomain: string, 
        lanjuageDomainNumber: number
        ) {
        this.languaje = languaje;
        this.lanjuageDomain = lanjuageDomain;
        this.lanjuageDomainNumber = lanjuageDomainNumber;
    }
}
