import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  category : categories[] =[
    {row: 1, catName: 'Staff', catSName: 'OFF', catStatus : 1, catEdit : 'fa-solid fa-pen-to-square', catDelete: 'fa-solid fa-trash'},
    {row: 2, catName: 'FEMALE APPRENTICE', catSName: 'FP', catStatus : 0, catEdit : 'fa-solid fa-pen-to-square', catDelete: 'fa-solid fa-trash'},
    {row: 3, catName: 'FEMALE CASUAL', catSName: 'FC', catStatus : 1, catEdit : 'fa-solid fa-pen-to-square', catDelete: 'fa-solid fa-trash'},
    {row: 4, catName: 'MALE CASUAL', catSName: 'MC', catStatus : 0, catEdit : 'fa-solid fa-pen-to-square', catDelete: 'fa-solid fa-trash'},
    {row: 5, catName: 'MALE WORKERS', catSName: 'MW', catStatus : 1, catEdit : 'fa-solid fa-pen-to-square', catDelete: 'fa-solid fa-trash'},
    
    
    ] 
    
    }
    
    
    export interface categories {
      row: number; 
      catName: string;
      catSName: string;
      catStatus : number;
      catEdit: string;
      catDelete: string;
    }
