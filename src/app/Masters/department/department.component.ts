import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';

@Component({
  selector: 'app-department',
  standalone: false,
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  depts: dept_values[] = []; // Stores department list

  // ✅ Separate object for new department
  newDepartment = {
    departmentName: '',
    shortName: '',
    deptStatus: true  // Ensure it's a boolean
  };

  constructor(private depservice: DepartmentService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.depservice.getDept().subscribe({
      next: (data) => {
        this.depts = data;
      }
    });
  }

  addDepartment() {
    if (this.newDepartment.departmentName == '') {
      alert("Department name can't be empty");
    } else if (this.newDepartment.shortName == '') {
      alert("Short Name can't be empty");
    } else {

      this.depservice.addDept(this.newDepartment).subscribe({
        next: (response) => {
          alert('Department added successfully');
          this.loadDepartments(); // Refresh list after adding
          this.newDepartment = { departmentName: '', shortName: '', deptStatus: true }; // Reset form
        }
      });
    }
  }

  deleteDepartment(dept: dept_values) {
    if (confirm('Are you sure you want to deactivate this department?')) {
      this.depservice.deleteDept(dept).subscribe({
        next: (response) => {
          console.log('Department deactivated:', response);
          alert('Department marked as inactive');
          this.loadDepartments(); // Refresh list
        },
        error: (err) => {
          console.error('Error deactivating department:', err);
          alert('Failed to deactivate department: ' + err.message);
        }
      });
    }
  }
  
  
  
}

export interface dept_values {
  row: number;
  departmentCode: number;
  departmentName: string;
  shortName: string;
  deptStatus: boolean; // Fix property name
}
