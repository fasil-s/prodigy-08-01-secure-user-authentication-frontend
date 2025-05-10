import { Route, Routes } from "react-router";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
