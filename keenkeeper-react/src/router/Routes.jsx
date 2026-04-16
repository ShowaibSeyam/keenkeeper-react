import { createBrowserRouter } from 'react-router';
import Homepage from '../pages/Homepage/Homepage';
import MainLayut from '../layout/MainLayut';
import Error from '../pages/Error/Error';
import Timeline from '../pages/Timeline/Timeline';
import Stats from '../pages/Stats/Stats';


export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayut></MainLayut>,
        errorElement: <Error />,
        children: [
            {
              path:'home',
              Component:Homepage
            },
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: 'timeline',
                element:<Timeline></Timeline>
            },
            {
                path:'stats',
                element:<Stats></Stats>
            }
        ]
        
       
            
    }

])

