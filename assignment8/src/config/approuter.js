import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardPage from "../pages/dashboard";
import Analyticss from "../pages/Analytics";
import Calenders from "../pages/Calender";
import Chats from "../pages/Chat";
import Customer from "../pages/Customer";
import Orderdetail from "../pages/orderdetail";
import Orderlist from "../pages/orderlist";
import Reviewss from "../pages/Reviews";
import Wallet from "../pages/wallet"
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        {/* <BANavbar /> */}
        <Routes>
          <Route path="dashboard/*" element={<DashboardPage />} />
          <Route path="analytics" element={<Analyticss />} />
          <Route path="calender" element={<Calenders />} />
          <Route path="chat" element={<Chats />} />
          <Route path="customer" element={<Customer />} />
          <Route path="orderdetail" element={<Orderdetail />} />
          <Route path="orderlist" element={<Orderlist />} />
          <Route path="reviews" element={<Reviewss />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
