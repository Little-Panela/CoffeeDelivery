import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout/";
import { Complete } from "../pages/Complete";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Complete />} />
        <Route path="/confirmOrder" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
