import  './App.css';
import LayOut from './Components/LayOut/LayOut.jsx';
import NotFound from './Components/NotFound/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hotels from './Components/Hotels/Hotels';
import Overview from './Components/Overview/Overview';
import Flights from './Components/Flights/Flights';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RegLayout from './Components/RegLayout/RegLayout';
import Protected_Routing from './Components/Protected_Routing/Protected_Routing';
import Cruises from './Components/Cruises/Cruises';
import { Offline, Online } from "react-detect-offline";

function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <RegLayout />, children: [
        { index: true, element: <Login></Login> },
        { path: 'register', element: <Register></Register> },
        { path: '*', element: <NotFound /> }
      ]
    },
    {
      path: 'Home', element: <LayOut />, children: [
        { path: '', element: <Overview /> },
        { path: 'flight', element: <Flights /> },
        { path: 'hotels', element: <Hotels /> },
        { path: 'cruises', element: <Cruises /> },

        { path: '*', element: <NotFound /> }
      ]
    }
  ])


  return (
    <>

      <Online>

        <RouterProvider router={routers}> </RouterProvider>

      </Online>

      <Offline>
        <div className="wrapper">
          <h1 >OFFLINE</h1>
          <h4>Please check your internet connection</h4>
        </div>

      </Offline>

    </>
  );
}

export default App;
