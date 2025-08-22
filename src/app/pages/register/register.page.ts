import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRadioGroup, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCard, IonItem, IonCardContent, IonCardHeader, IonLabel, IonListHeader, IonRadio, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton,  IonLabel, IonCard, IonInput,
    IonCardTitle, IonContent, IonHeader,
    IonTitle, IonToolbar, CommonModule,
    FormsModule, IonItem, IonCardContent,
    IonContent, IonCard, IonCardTitle,
    IonCardHeader, IonRadioGroup, IonRadio]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
