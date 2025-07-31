import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import AuthProvider from "./context/AuthProvider";
import Protected from "./components/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/protected"
          element={
            <AuthProvider>
              <Protected />
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
