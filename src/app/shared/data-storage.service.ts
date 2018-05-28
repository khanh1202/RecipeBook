import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://shopping-list-5f50f.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://shopping-list-5f50f.firebaseio.com/recipes.json?auth=' + token).subscribe(
      (recipes) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
