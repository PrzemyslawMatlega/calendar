
import TheCalendar from './components/TheCalendar'
import ThePopup from './components/ThePopup';

export const routes =[
        {
            path: '',
            component: TheCalendar,
            children: [
                {
                    path: '/grudzien',
                    component: ThePopup
                },

            ]
        }

]
