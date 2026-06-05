import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Onboarding from "./assets/pages/Onboarding";
import Profile from "./assets/pages/Profile";
import Auth from "./assets/pages/Auth";
import Account from "./assets/pages/Account";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/Onboarding" element={<Onboarding />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/auth/:pathname" element={<Auth />} />
            <Route path="/account/:pathname" element={<Account />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
