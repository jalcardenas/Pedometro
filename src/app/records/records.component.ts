import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { Response }  from '@angular/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private serverService: ServerService){}
  puntuacion: number;
  submitted = false;
  ngOnInit() {
       this.puntuacion = Math.round(Math.random() * (10000 - 0) + 0);
   }
  @ViewChild('f') signupForm: NgForm;
  // defaultQuestion = 'teacher';
  // answer = '';
  // genders = ['male', 'female'];
  user = {
     username: '',
     email: '',
  //  secretQuestion: '',
  //   answer: '',
  //   gender: ''
  };
  lista=[];
  onSubmit() {
    
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    // this.user.secretQuestion = this.signupForm.value.secret;
    // this.user.answer = this.signupForm.value.questionAnswer;
    // this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
    this.puntuacion = Math.round(Math.random() * (10000 - 0) + 0);
    console.log("Inicio:"+this.lista);
    this.serverService.getServers()
      .subscribe(
      function (servers: any[]) {
         this.lista=servers;
         console.log(this.lista);
        },
      function (error) { console.log(error) }
      );/*
      for (let entry of servers) {
        console.log(entry); // 1, "string", false
      }
    this.lista.push({
      puntuacion: this.puntuacion,
      name: this.user.username,
      email: this.user.email,
    })*/
    
    this.serverService.storeServers(this.lista)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      )
  }
  
  
  // onAddServer(name: string) {
  //   this.servers.push({
  //     name: name,
  //     capacity: 50,
  //     id: this.generateId()
  //   });
  // }
  // private generateId() {
  //   return Math.round(Math.random() * 10000);
  // }
  // onSave(){
  //   this.serverService.storeServers(this.servers)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error)
  //     );
  // }

  onGet(){
    this.serverService.getServers()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      )
  }
}
