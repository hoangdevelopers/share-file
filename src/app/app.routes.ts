import {Routes, RouterModule} from '@angular/router';
import { Home } from './component/home/home.component';
import { Login } from './component/login/login.component';

const routing : Routes = [
    {
        path: '',
        component: Home   
    },
    {
        path: 'login',
        component: Login
    }
    ]
export const appRouter = RouterModule.forRoot(routing)