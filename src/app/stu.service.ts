import { Injectable } from '@angular/core';
import { stuArray } from './studentArray'
import { StudentData } from './studentData'
import { Observable } from 'rxjs';
import { stuJson } from './studentArray';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StuService {

  constructor(private http: HttpClient) {

  }
 
  public studentDataUrl = "http://localhost:3000/students";

  getStudent(): Observable<StudentData[]> {
    return this.http.get<StudentData[]>(this.studentDataUrl);
  }
  getStudentByID(id): Observable<StudentData []> {
    return this.http.get<StudentData []>(`${this.studentDataUrl}/${id}`);
  }

  addStudent(data: StudentData): Observable<void> {
    return this.http.post<void>(this.studentDataUrl, data)
  };

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.studentDataUrl}/${id}`)
  }

  updateStudent(id: number, stuData: StudentData) :  Observable<void>{
    return this.http.put<void>(this.studentDataUrl+'/'+id, stuData)

  }

} 
