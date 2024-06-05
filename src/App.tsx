import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterDetails from "./pages/enter_details/_page";
import { Login } from "./pages/login/_page";
import { PageLayout } from "./pages/_layout/_component";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> main

function App() {
  return (
    <>
<<<<<<< HEAD
      <ToastContainer progressClassName="toast-progress" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
=======
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

>>>>>>> main
          <Route element={<PageLayout />}>
            <Route path="/" element={<EnterDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
