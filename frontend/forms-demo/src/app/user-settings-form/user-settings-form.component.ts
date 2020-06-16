import { Component, OnInit } from '@angular/core';
import { DefaultUserSettings } from '../data/default-user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {


  defaultUserSettings : DefaultUserSettings = {
    name: 'Jean-Yves',
    checkboxNewLetter: true,
    interfaceStyle: 'dark',
    subscribeType: 'Annuelle',
    note:'Veuillez indiquer vos notes/remarques ...'
  };

  userSettings : DefaultUserSettings = { ...this.defaultUserSettings}

  
  constructor() { }
  
  ngOnInit(): void {
  }

}
