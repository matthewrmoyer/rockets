import { RouterModule } from '@angular/router';
import { RocketCalendarComponent } from './rocket-calendar.component';

const ROUTES = [
    {path: '', component: RocketCalendarComponent}
]

export default RouterModule.forChild(ROUTES)
