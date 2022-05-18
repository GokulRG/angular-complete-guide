import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://1.bp.blogspot.com/-9ADPTC5yf4Q/VpHopirm0qI/AAAAAAAAcJM/2a0baf6nbjw/s1600/IMG_1085.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
