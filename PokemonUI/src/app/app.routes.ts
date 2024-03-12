import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { CountryListComponent } from './country-list/country-list.component';

export const routes: Routes = [
    {path: 'categories', component: CategoryListComponent},
    {path: 'newcategory', component: PostCategoryComponent},
    {path: 'countries', component: CountryListComponent}
];
