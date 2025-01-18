import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/AdminHeader'

const AdminLayout = () => {
  return (
    <>
<Header />
<Outlet/>
    </>
  )
}

export default AdminLayout