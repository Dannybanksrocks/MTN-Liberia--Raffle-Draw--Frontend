import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterDetails from "./pages/enter_details/_page";
import { Login } from "./pages/login/_page";
import { PageLayout } from "./pages/_layout/_component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer progressClassName="toast-progress" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PageLayout />}>
            <Route path="/" element={<EnterDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
