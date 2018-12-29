import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm:NgForm;
  defaultQuestion='pet';
  answer='';
  genders=['female','male'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''

  };
  submitted=false;
  suggestUserName() {

    this.signupForm.form.patchValue({
      UserData:{username:'abz'}
    })
    // const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   UserData:{
    //     username:'alka',
    //     email:'malik@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'

    // })
  }
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    this.submitted=true;
    console.log(this.signupForm);
    this.user.username=this.signupForm.value.UserData.username;
    this.user.email=this.signupForm.value.UserData.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer
    this.user.gender=this.signupForm.value.gender;
    this.signupForm.reset();

  }
}
