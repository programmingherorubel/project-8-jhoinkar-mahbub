import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Blogs />
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
    </div>
  )
}

export default App
