import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
readonly APIUrl   = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";


  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDeprtment(val:any){
    return this.http.post(this.APIUrl + '/department/',val);
  }

  updateDeprtment(val:any){
    return this.http.put(this.APIUrl + '/department/',val);
  }

  deleteDeprtment(val:any){
    return this.http.delete(this.APIUrl + '/department/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/HREmployees/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/HREmployees/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/HREmployees/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/HREmployees/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/department/');
  }





}
