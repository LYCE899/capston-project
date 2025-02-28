// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  redirectPath = '/signin'
}) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    // Vous pouvez ajouter un composant de chargement ici
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};