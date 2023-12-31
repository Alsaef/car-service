import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='mx-auto' style={{width:'99%'}}>
<React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
</div>
)
