declare module 'PersonTypes' {
    export declare interface IPerson {
        id?: number;
        name: string;
        birthDate: string;
        job: string;
        country: string;
        salary: string;
    }
    export type IPersonList = Array<IPerson>;
}