import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class UserService{
    public data: any;

    constructor(private http: Http) {

    }

    getUser(){
        this.http.get("http://127.0.0.1:8080/sports.json")
        .subscribe(
            res => {
                this.data = res.json();
                console.log(this.data.name);
            }, error => {
                console.log("Error");
            }
        );
    }

}