import { Outlet } from "react-router-dom";
import AdminHeader from "../../../layouts/AdminLayout";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminLayout;