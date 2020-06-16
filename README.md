# Angular_Forms

## Form basics

Il existe deux type de formulaire Angulaire:

* Formulaire piloté par modèle
* Formulaire réactif

Voici quelques-unes des différences entre les deux types:

> Les formulaires pilotés par modèles utilisent le "FormsModule", tandis que les formulaires réactifs sont basés sur "ReactiveFormsModule".

> Les formulaires pilotés par modèle sont de nature asynchrone, tandis que les formulaires réactifs sont principalement synchrones.

> Dans une approche basée sur un modèle, la majeure partie de la logique est générée à partir du modèle, tandis que dans une approche réactive, la logique réside principalement dans le code composant ou code typescript.

> Les tests unitaires sont plus facile sur formulaire reactif.

## Creation du projet

* Verifier l'installation de nodejs, npm et angular avec les commandes ci-dessous:

```cmd
node -v
npm -v
ng --version
```

* Si l'un des packages est manquant se referer a la documentation

https://www.ostechnix.com/install-node-js-linux/

https://cli.angular.io/

* Creation du projet angular

```cmd
mkdir [projet]
```


```cmd
cd  [projet]
```

```cmd
// option skip install premet d'installer npm apres.
ng new forms-demo --skip-install
cd forms-demo
// etre super admin
npm install
ng serve
```

**Controler dans votre navigateur que tous fonctionne**

## Basic Angular FormsModule

Dans app.module.ts, on import le module Forms d'angular:

```ts
...
import { FormsModule } from '@angular/forms';

@NgModule({
 ...
  imports: [
    BrowserModule,
    FormsModule
  ],
 ...
```

#### Creation d'un component Form (Formulaire)

Executer la commande suivante pour creer le component user-settings-form 

```cmd
ng g c user-settings-form
```

* ng: angular
* g: generate
* c: component
* [Nom du component]

**Lors de la creation la maj automatique de app.module.ts est faite**

* Dans le fichier app.component.html, supprimer son contenu et y ajouter la directive du selector du component user-settings-form:

```html
<app-user-settings-form></app-user-settings-form>
```

* Dans le fichier user-settings-form.html creer votre formulaire html

```html
<form>
    <input placeholder="name" />
    <button>OK</button>
</form>
```

*Rappel* il est necessaire de rebuild lors de l'ajout de modules.


#### Utilisation de bootstrap pour le style

Nous utiliserons https://getbootstrap.com/docs/4.5/components/forms/  pour s'inspirer du templet html de notre formulaire.

* Pour cela tapper dans un terminal en su:

```cmd
npm install --save bootstrap
```

* Ajouter la propriete style bootstrap dans le fichier angular.json

```json
 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```

**Rebuild Ctrl+C puis ng serve**

* Tester bootstrap en changeant le style du bouton

```html
<form>
    <input placeholder="name" />
    <button class="btn btn-primary">OK</button>
</form>
```

Completer votre fichier user-settings-form.html tapper

```html
<form>
    <input placeholder="name" />
    <button>OK</button>
</form>
```

#### Utilisation de checkboxes et radios

Completer votre fichier user-settings-form.html par un groupe de bouton radio tapper:

```html
<h5>Style de l'interface utilisateur</h5>
<div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="radio" id="lightInterface" name="interfaceStyle" value="light">
        <label class="form-check-label" for="lightInterface">
            Light
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" id="mediumInterface" name="interfaceStyle" value="medium">
        <label class="form-check-label" for="mediumInterface">
            Medium
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" id="darInterface" name="interfaceStyle" value="dark">
        <label class="form-check-label" for="darInterface">
            Dark
        </label>
    </div>
</div>
```

#### Controle de la selection et des options

Completer votre fichier user-settings-form.html par une liste de choix tapper:


```html
<div class="form-group">
    <label for="subscriptionType">Type de souscription</label>
    <select class="form-control" id="subscriptionType" name="subscribeType" >
        <option>Mensuelle</option>
        <option>Annuelle</option>
        <option>Hebdomadaire</option>
    </select>
</div>
```

#### Autre controles du formulaire

Completer votre fichier user-settings-form.html par une zone de saisi libre, une zone de saisi password et une saisi de date:


**Changer le contenu de la balise id="testing" et changer input type="color" pour voir leur effet, nous commenterons cette partie pour le reste du cours**




```html
<div class="form-group">
  <label for="notes">Notes</label>
  <textarea class="form-control" name="note" id="notes" rows="3">
  </textarea>
</div>
<div class="form-group">
  <label for="password">Mot de passe</label>
  <input class="form-control" name="password" id="password" type="password">
</div>
<div class="form-group">
  <label for="testing">Test calendrier</label>
  <input class="form-control" name="testing" id="testing" type="date">
</div>
```

##  Data binding

#### Utilisation de NgForm

* Utiliser une variable de reference sur la directive ngForm

```html
<form #myForm="ngForm">
```

* Afficher le résultat à l'aide de l'interpolation ({{}}) en bas du formulaire

```html
{{ myForm }
```

Nous pouvons constater que la variable referent ngForm est de type Object.

* Ajouter un filtre json (| json) à notre resultat pour observer le contenu de l'objet.

```html
{{ myForm.form | json }
```

#### NgModel

* Ajouter ngModel à notre balise input et controler de contenu de la propriete value de notre reference myForm.

```html
<input id="name" name="name" class="form-control" ngModel/>
<h3>{{ myForm.value | json }}</h3>
```

* Ajouter ngModel sur tous vos input pour controler leur fonctionnement et reactivite.


**Lors de la saisi d'un nom vous pouvez constater que la valeur name change instantanement**


#### Creation d'un model de data

* Creer un dossier src/app/data
* Creer un fichier user-settings.ts
* Creation de l'interface src/app/UserSettings dans user-settings.ts

```ts
export interface defaultUseSettings {
    name: string,
    checkboxNewLetter: boolean,
    interfaceStyle: string,
    subscribeType: string,
    note:string
}
```

* Importer l'interface dans src/app/user-settings-form/user-settings-form.component.ts

```ts
...
import { defaultUseSettings } from '../data/user-settings';
...
export class defaultUseSettingsFormComponent implements OnInit {
  defaultUseSettings : defaultUseSettings = {
    name: 'Jean-Yves',
    checkboxNewLetter: true,
    interfaceStyle: 'dark',
    subscribeType: 'Annuelle',
    note:'Veuillez indiquer vos notes/remarques ...'
  };
...
}
```

#### Data binding bidirectionnel

Nous allons maintenant brancher notre model a notre formulaire. Pour cela nous ajoutons à notre templet html des banana bracket ( [()] ) autour de [(ngModel)]="defaultUseSettings.[propriete]" et ajouter un controle à la fin.


```html
...
<input id="name" name="name" class="form-control" [(ngModel)]="defaultUseSettings.name"/>
...
<input type="checkbox" class="form-check-input" id="checkbox" name="checkboxNewLetter" [(ngModel)]="defaultUseSettings.checkboxNewLetter">
...
<input class="form-check-input" type="radio" id="lightInterface" name="interfaceStyle" value="light" [(ngModel)]="defaultUseSettings.interfaceStyle">
...
<input class="form-check-input" type="radio" id="mediumInterface" name="interfaceStyle" value="medium" [(ngModel)]="defaultUseSettings.interfaceStyle">
...
<input class="form-check-input" type="radio" id="darInterface" name="interfaceStyle" value="dark" [(ngModel)]="defaultUseSettings.interfaceStyle">
...
<select class="form-control" id="subscriptionType" name="subscribeType" [(ngModel)]="defaultUseSettings.subscribeType">
...
<textarea class="form-control" name="note" id="notes" rows="3" [(ngModel)]="defaultUseSettings.note">
...
<h3>{{ defaultUseSettings | json }}</h3>
```

#### Copie des datas du formulaire

Exemple dans le cas d'une deconnexion utilisateur ou un retour arriere de navigation, les données du formulaire initiales ne doivent pas etre corrompu.

* Ajouter une copie à l'aide de l'operation spread ...

```ts
userSettings : DefaultUserSettings = { ...this.defaultUserSettings}
```

Nous pouvons controler son effet à l'aide de l'interpolation

```html
<h3>{{ defaultUserSettings | json }}</h3>
<h3>{{ userSettings | json }}</h3>
```

## Validation du formulaire

#### Validation de champs HTML
#### Validation des classes CSS
#### Validation des proprietes ngModel







## HTTP Posting

## Third-party Controls

## Bug-fix et Tips

1 . tsconfig.json ==> file not found
* Ajouter à votre fichier de config

```json
  "include": [
    "src/**/*"
  ],
```

2 . Copie proprietes avec l'operateur spread ...  pour faire une copie d'un objet dans un objet utiliser l'operateur lodash