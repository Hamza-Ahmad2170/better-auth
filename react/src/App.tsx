import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import EmailVerify from "./components/EmailVerify";
import Auth from "./components/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
