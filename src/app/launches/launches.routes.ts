import { RouterModule } from '@angular/router';
import {LaunchesComponent} from './launches.component';

const ROUTES = [
    {path: '', component: LaunchesComponent}
]

export default RouterModule.forChild(ROUTES)
