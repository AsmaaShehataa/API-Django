import { Component, OnInit } from '@angular/core';             
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  HREmployeesList:any=[];

  ModalTitle:any;
  ActivateAddEditempComp:boolean=false;
  emp:any;

  ngOnInit(): void {

    this.refreshHREmployeesList();
   
}

addClick(){
  this.emp={
    EmployeesId:0,
    EmployeesName:"",
    Department: "",
    DateOfJoining: "",
    PhotoFileName: "Ananymous.png"

  }
  this.ModalTitle="Add Employee";
  this.ActivateAddEditempComp=true;

}

editClick(item: any){
  this.emp=item;
  this.ModalTitle="Edit Employee";
  this.ActivateAddEditempComp=true;

}

deleteClick(item: any){
  if(confirm('Are you sure??')){
    this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
      alert(data.toString());
      this.HREmployeesList();
    })
  }
}


closeClick(){
  this.ActivateAddEditempComp=false;
  this.refreshHREmployeesList();

}


refreshHREmployeesList(){
  this.service.getEmpList().subscribe(data=>{
    this.HREmployeesList=data;
  });
  
}
}