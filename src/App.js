import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Budgetmonitoring from './components/pages/Budgetmonitoring';
import Loanrepayschedule from './components/pages/Loanrepayschedule';
import Classificationstatus from './components/pages/Classificationstatus';
import Rateandcommissionchart from './components/pages/Rateandcommissionchart';
import Paymentmade from './components/pages/Paymentmade';
import Projectfinance from './components/pages/Projectfinance';
import Insurancepolicydetails from './components/pages/Insurancepolicydetails';
import Taskmonitoring from './components/pages/Taskmonitoring';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />
    },
    {
      path:'/budgetmonitoring',
      element: <Budgetmonitoring />
    },
    {
      path:'/loanrepayschedule',
      element: <Loanrepayschedule />
    },
    {
      path:'/classificationstatus',
      element: <Classificationstatus />
    },
    {
      path:'/rateandcommissionchart',
      element: <Rateandcommissionchart />
    },
    {
      path:'/paymentmade',
      element: <Paymentmade />
    },
    {
      path:'/projectfinance',
      element: <Projectfinance />
    },
    {
      path:'/insurancepolicydetails',
      element: <Insurancepolicydetails />
    },
    {
      path:'/taskmonitoring',
      element: <Taskmonitoring />
    }

  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
