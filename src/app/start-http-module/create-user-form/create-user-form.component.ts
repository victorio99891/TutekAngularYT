import {Component, OnInit} from '@angular/core';
import {HttpJsonService} from '../service/http-json.service';
import {UserImplModel} from '../model/user-impl.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  constructor(private http: HttpJsonService) {

  }

  userFormData: UserImplModel = new UserImplModel();


  secretPassword: string = '';
  somethingIsWrong: boolean = false;
  errorMessage: string = '';
  repeatedPassword: string = '';
  somethingIsGood: boolean = false;
  goodMessage: string = '';


  ngOnInit() {
  }

  validateForm() {
    let isSecretValid: boolean = false;
    let isLoginValid: boolean = false;
    let isPasswordValid: boolean = false;
    let isNameValid: boolean = false;
    let isSurnameValid: boolean = false;

    isSecretValid = this.popSecretPasswordWindow();

    if (isSecretValid) {
      isLoginValid = this.validateLogin();
    }

    if (isLoginValid) {
      isPasswordValid = this.validatePassword();
    }

    if (isPasswordValid) {
      isNameValid = this.validateName();
    }

    if (isNameValid) {
      isSurnameValid = this.validateSurename();
    }
    if (isSurnameValid) {
      this.printInputData();

      this.http.addNewUserREST(this.userFormData, this.secretPassword).subscribe(x => {
        this.goodMessage = JSON.stringify(x);
        this.somethingIsGood = true;
      }, (error) => {
        this.errorMessage = JSON.stringify(error.error);
        this.somethingIsWrong = true;
      });


    }
  }


  popSecretPasswordWindow(): boolean {
    this.secretPassword = prompt('Type secret password to complete the action:', '');
    if (this.secretPassword != 'q1w2e3r4') {
      this.somethingIsWrong = true;
      this.errorMessage = 'Secret password is wrong! Try Again!';
      return false;
    } else {
      this.somethingIsWrong = false;
      return true;
    }
  }

  clearErrorMessage() {
    if (this.somethingIsWrong) {
      this.errorMessage = '';
      this.somethingIsWrong = false;
    }
    if (this.somethingIsGood) {
      this.goodMessage = '';
      this.somethingIsGood = false;
    }
  }

  printInputData() {
    console.log(this.userFormData);
  }

  checkRepeatedPassword(): boolean {
    if (this.userFormData.password !== this.repeatedPassword) {
      this.errorMessage = 'Password and repeated password is not the same';
      this.somethingIsWrong = true;
      return false;
    } else {
      return true;
    }
  }

  private validateLogin(): boolean {
    if (this.userFormData.login.length < 5) {
      this.somethingIsWrong = true;
      this.errorMessage = 'Login should consist from at least 5 characters.';
      return false;
    }
    return true;
  }

  private validatePassword(): boolean {
    let validPassword: boolean = false;
    if (this.userFormData.password.length < 4) {
      this.somethingIsWrong = true;
      this.errorMessage = 'Password should consist from at least 4 characters.';
      return false;
    } else {
      validPassword = true;
      let repeatedPassIsValid: boolean = this.checkRepeatedPassword();
      if (validPassword && repeatedPassIsValid) {
        return true;
      }
    }


  }

  private validateName(): boolean {
    if (this.userFormData.name.length < 2) {
      this.somethingIsWrong = true;
      this.errorMessage = 'Name should consist from at least 2 characters.';
      return false;
    }
    return true;
  }

  private validateSurename(): boolean {
    if (this.userFormData.surname.length < 2) {
      this.somethingIsWrong = true;
      this.errorMessage = 'Surname should consist from at least 2 characters.';
      return false;
    }
    return true;
  }
}

