import './App.css'
import Main from "./components/Main/Main";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import Register from './components/Register/Register'
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ])

  return (
    <div>
      {/* <h1>Hi</h1>
      <button onClick={handleClick}>Login with google</button> */}
<RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
