import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from '../Components/Header/Navbar'
import Dashboard from '../Components/Dashboard/Dashboard'
import Register from '../Components/Auth/Register'
import Login from '../Components/Auth/Login'
import Footer from '../Components/Footer/Footer'
import FileUpload from '../Components/FileUpload'
import AdminDashboard from '../Components/Dashboard/AdminDashboard'
import CreateProduct from '../Components/Products/CreateProduct'

function Routers() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Navigate to='/dashboard'/>} />
            <Route path='/adminDashboard' element={<AdminDashboard/>} />
            <Route path='/createProduct' element={<CreateProduct/>} />
            {/* <Route path="/" element={<h1>Home</h1>} /> */}
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/upload" element={<FileUpload />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Routers