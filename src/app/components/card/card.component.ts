import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  name: string = "CHARIZARD";
  attributes: string[] = ["FIRE", "ROCK"];
}
