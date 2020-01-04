import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getUserDetails(username,password,status) {

    const req = this.http.post('api/index.php', {
      'username': username,
      'password': password,
      'status' : status
    })
      .subscribe(
        (val) => {
          /*console.log("POST call successful value returned in body",
            val);*/
          if (val === 'admin') {
            window.open("api/admin.php");
          }
          else if (val === 'Welcome') {
            alert(val);
          }
          else if (val === 'Wrong') {
            alert(val);
          }
          else if (val === 'New record created successfully') {
            alert(val);
          }
            //alert(val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

  }
}
