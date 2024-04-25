import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'
import MovieDetail from '../pages/MovieDetail'

const AppRouter = () => {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/details/:id" element={<MovieDetail />} />

    </Routes></div>
  )
}

export default AppRouter