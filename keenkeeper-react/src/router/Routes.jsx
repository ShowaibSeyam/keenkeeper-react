import { createBrowserRouter } from 'react-router';
import Homepage from '../pages/Homepage/Homepage';
import MainLayut from '../layout/MainLayut';

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayut></MainLayut>,
        children: [
            {
              path:'home',
              Component:Homepage
            },
        ]
            
    }
])

