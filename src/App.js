import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Budgetmonitoring from './components/pages/Budgetmonitoring';
import Loanrepayschedule from './components/pages/Loanrepayschedule';
import Classificationstatus from './components/pages/Classificationstatus';
import Rateandcommissionchart from './components/pages/Rateandcommissionchart';

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
      element: <Budgetmonitoring />
    },
    {
      path:'/projectfinance',
      element: <Budgetmonitoring />
    },
    {
      path:'/insurancepolicydetails',
      element: <Budgetmonitoring />
    },
    {
      path:'/taskmonitoring',
      element: <Budgetmonitoring />
    }

  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
