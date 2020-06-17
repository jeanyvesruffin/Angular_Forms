import { Component, OnInit } from '@angular/core';
import { DefaultUserSettings } from '../data/default-user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {


  defaultUserSettings : DefaultUserSettings = {
    name: null,
    checkboxNewLetter: null,
    interfaceStyle: null,
    subscribeType: null,
    note:null
  };

  userSettings : DefaultUserSettings = { ...this.defaultUserSettings}
  postError =  false;
  postErrorMessage = '';
  // subscriptionTypes = ['Annuelle', 'Hebdomadaire', 'Mensuelle'];
  subscriptionTypes: Observable<string[]>;
  
  constructor(private dataService : DataService) {}
  
  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptiontypes();
  }

  onSubmit(form : NgForm) {
    console.log(' in submit : ', form.valid);
    if(form.valid){
      this.dataService.postUserSettingsForm(this.defaultUserSettings).subscribe(
        result => console.log('sucess : ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Veuillez fixer les erreurs ci-dessus"
    }
  }
  onHttpError(errorResponse: any): void {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onBlur(field : NgModel) {
    console.log(' in onblur :', field.valid)
  }

}
