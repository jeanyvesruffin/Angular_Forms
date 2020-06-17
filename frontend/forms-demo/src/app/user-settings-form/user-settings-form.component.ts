import { Component, OnInit } from '@angular/core';
import { DefaultUserSettings } from '../data/default-user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  
  constructor(private dataService : DataService) {}
  
  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    console.log(' in submit : ', form.valid);
    this.dataService.postUserSettingsForm(this.defaultUserSettings).subscribe(
      result => console.log('sucess : ', result),
      error => console.log ('error : ', error)
    );
  }

  onBlur(field : NgModel) {
    console.log(' in onblur :', field.valid)
  }

}
