import './App.css';
import Layout from './screens/Layout';
import {
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Privacy from './screens/Privacy';
import TermsAndConditions from './screens/TermsAndConditions';
import TermsOfsale from './screens/TermsOfsale';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: 'terms-and-conditions',
    element: <TermsAndConditions />
  },
  {
    path: 'terms-of-sale',
    element: <TermsOfsale />
  }
]);

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      <Route path='/terms-of-sale' element={<TermsOfsale />} />
    </Routes>
  );
}

export default App;
