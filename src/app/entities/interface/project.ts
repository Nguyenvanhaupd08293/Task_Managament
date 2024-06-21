export interface IDuAn {
       id?: number; // Mark 'id' as optional
       name_project: string;
       date_start: string;
       price: number;
       leader: string;
       member: any; // Change type to 'any' to accommodate JSON string
     }
     