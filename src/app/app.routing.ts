import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';
import { PostCategoryComponent } from './post-category/post-category.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'admin',
        component:AdminComponent
    },

    {
        path: 'article/:id',
        component:PostComponent
    }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);