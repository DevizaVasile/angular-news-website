import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'about',
        component: AboutComponent
    }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);