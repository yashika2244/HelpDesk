import React from 'react'
import { Route , Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../components/Dashboard';
import CreateTicket from '../pages/CreateTicket';
import TicketList from '../pages/TicketList';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../routers/ProtectedRoute'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter;
