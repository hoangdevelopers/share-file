import {Routes, RouterModule} from '@angular/router';
import { Home } from './component/home/home.component';

const routing : Routes = [
    {
        path: '',
        component: Home   
    }
    ]
export const appRouter = RouterModule.forRoot(routing)