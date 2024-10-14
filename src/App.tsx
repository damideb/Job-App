import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostJob from "./pages/Dashboard/postJob";
import Profile from "./pages/Dashboard/profile";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import GetJob from "./pages/Dashboard/getJob";
import EditJob from "./pages/Dashboard/EditJob";
import AuthLayout from "./components/AuthLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./pages/error";
import Apply from "./pages/Dashboard/Apply";
import Application from "./pages/Application";



const Router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/apply",
        element: <Application />,
      },

      {
        element: <AuthLayout />, // Protects dashboard routes
        children: [
          {
            element: <DashboardLayout />, // Actual dashboard layout
            children: [
              {
                path: "/dashboard",
                element: <PostJob />,
              },
              {
                path: "/dashboard/application",
                element: <Apply />,
              },
              {
                path: "/dashboard/all-jobs",
                element: <GetJob />,
              },
              {
                path: "/dashboard/profile",
                element: <Profile />,
              },
              {
                path: "/dashboard/edit/:id",
                element: <EditJob />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <ToastContainer
        autoClose={2000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
}

export default App;
