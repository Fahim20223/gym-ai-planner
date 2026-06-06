import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Navbar from "./components/layout/Navbar";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { authClient } from "./lib/auth";

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient}>
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
    </NeonAuthUIProvider>
  );
}

export default App;
