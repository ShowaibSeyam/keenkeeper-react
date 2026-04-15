import { createBrowserRouter } from 'react-router';
import Homepage from '../pages/Homepage/Homepage';
import MainLayut from '../layout/MainLayut';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayut></MainLayut>,
        errorElement: <Error />,
        children: [
            {
              path:'home',
              Component:Homepage
            }
        ]
        
       
            
    }

])

