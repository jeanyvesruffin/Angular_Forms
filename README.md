# Angular_Forms

## Form basics

Il existe deux type de formulaire Angulaire:

* Formulaire piloté par modèle
* Formulaire réactif

Voici quelques-unes des différences entre les deux types:

> Les formulaires pilotés par modèles utilisent le "FormsModule", tandis que les formulaires réactifs sont basés sur "ReactiveFormsModule".

> Les formulaires pilotés par modèle sont de nature asynchrone, tandis que les formulaires réactifs sont principalement synchrones.

> Dans une approche basée sur un modèle, la majeure partie de la logique est générée à partir du modèle, tandis que dans une approche réactive, la logique réside principalement dans le code composant ou code typescript.

> Les tests uinitaires sont plus facile sur formulaire reactif.

## Creation du projet

* Verifier l'installation de nodejs, npm et angular avec les commandes ci-dessous:

```cmd
node -v
npm -v
ng --version
```

* Si l'on a des packages manquant se referer a la documentation

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



#### Utilisation de bootstrap pour le style

#### Utilisation de checkboxes et radios

#### Controle de la selection et des options

#### Autre controles du formulaire


## Data binding


## Form validation


## HTTP Posting

## Third-party Controls

