import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Single from "./pages/Single"
import Write from "./pages/Write"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world - This is Home!</div>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;


