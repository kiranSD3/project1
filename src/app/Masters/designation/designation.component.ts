import { Component, OnInit } from '@angular/core';
import { DesignationService } from '../../Service/designation.service';

@Component({
  selector: 'app-designation',
  standalone: false,
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {

  desigs: desigvalues[] = [];

  newDesignation = {
    designationName: '',
    shortName: '',
    status: true
  }
  constructor(private desigService: DesignationService) { }

  ngOnInit(): void {
    this.loadDesignation();
  }

  loadDesignation() {
    this.desigService.getDesignation().subscribe({
      next: (data) => {
        this.desigs = data;
      }
    })
  }

  addDesignation() {

    if (this.newDesignation.designationName == '') {
      alert("Designation name can't be empty");
    } else if (this.newDesignation.shortName == '') {
      alert("Short name cant be empty");
    } else {
      this.desigService.addDesignation(this.newDesignation).subscribe({
        next: (response) => {
          this.newDesignation = response;
          alert("Designation added successfully")
          this.loadDesignation();
          this.newDesignation = { designationName: '', shortName: '', status: true }
        }
      });
    }
  }

}


export interface desigvalues {
  row: number;
  designationName: string;
  shortName: string;
  status: boolean;
}