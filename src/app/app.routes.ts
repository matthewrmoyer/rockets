import { RouterModule } from '@angular/router';

const ROUTES = [
    {path: '', pathMatch: 'full', redirectTo: '/'},
    {path: 'launches', loadChildren: 'app/launches/launches.module'},
    {path: 'calendar', loadChildren: 'app/rocket-calendar/rocket-calendar.module'}
]

 export default RouterModule.forRoot(ROUTES)
