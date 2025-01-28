import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./pages/login/login";
import DonationList from "./pages/donation-list/donation-list";
import AddDonation from "./pages/add-donation/add-donation";
import PrivateRoute from "./components/privateRoute";
// import EntryForm from './components/form';

function App() {
  return (
  // <EntryForm />
  <BrowserRouter>
  <Routes>
    <Route index element={<Login />} />
    <Route path="/donation-list" element={<PrivateRoute><DonationList /></PrivateRoute>} />
    <Route path="/add-donation" element={<PrivateRoute><AddDonation /></PrivateRoute>} />
    <Route path="*" element={<Login />} />
  </Routes>
</BrowserRouter>
);
}

export default App;
