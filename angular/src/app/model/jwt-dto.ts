export class JwtDto {
    token!: string;
    //bearer = "Bearer";
    type!: string
    userName!: string;
    authorities!: string[];
}
