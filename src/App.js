<<<<<<< HEAD
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App-header">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Signin />
    </div>
=======
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
>>>>>>> 07bada63c5c92a58f1fdc4b98017932f6fd56f90
  );
}

export default App;
