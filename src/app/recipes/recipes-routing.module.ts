import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes.component';

const recipesRouting: Routes = [
  {path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(recipesRouting)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
