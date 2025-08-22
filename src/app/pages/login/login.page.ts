import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, IonItem, IonCardContent, IonContent, IonCard, IonCardTitle, IonCardHeader, CommonModule, FormsModule, IonButton]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
