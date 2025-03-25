import { Component } from '@angular/core';

@Component({
  selector: 'app-bankmaster',
  standalone: false,
  templateUrl: './bankmaster.component.html',
  styleUrl: './bankmaster.component.scss'
})
export class BankmasterComponent {

  bank : banks[] = [
    { row: 1, bankName: 'INDIAN OVERSEA BANK', bankSName: 'IOB', bankifsc: 'IOBA0000358', bankStatus: 1, bankEdit: 'fa-solid fa-pen-to-square', bankDelete: 'fa-solid fa-trash'},
    { row: 1, bankName: 'CITY UNION BANK', bankSName: 'CUB', bankifsc: 'CIUB0000358', bankStatus: 1, bankEdit: 'fa-solid fa-pen-to-square', bankDelete: 'fa-solid fa-trash'},
    { row: 1, bankName: 'STATE BANK OF INDIA', bankSName: 'SBI', bankifsc: 'SBI0000358', bankStatus: 1, bankEdit: 'fa-solid fa-pen-to-square', bankDelete: 'fa-solid fa-trash'},
    { row: 1, bankName: 'AXIS BANK', bankSName: 'AB', bankifsc: 'AB0000358', bankStatus: 0, bankEdit: 'fa-solid fa-pen-to-square', bankDelete: 'fa-solid fa-trash'},
  ]
}


export interface banks {
  row: number; 
  bankName: string;
  bankSName: string;
  bankifsc: string;
  bankStatus : number;
  bankEdit: string;
  bankDelete: string;
}