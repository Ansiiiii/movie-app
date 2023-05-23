import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MovieSearchResultsComponent } from "./components/movie-search-results/movie-search-results.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movie-searchResults", component: MovieSearchResultsComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
