import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceForm from '../components/ServiceForm';
import type { Service, ServiceFormData } from '../types';
import { Pencil, Trash2, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Admin() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddService = (data: ServiceFormData) => {
    const newService = {
      ...data,
      id: Date.now().toString(),
    };
    setServices([...services, newService]);
    alert('Servicio añadido correctamente');
  };

  const handleEditService = (data: ServiceFormData) => {
    if (!editingService) return;
    
    const updatedServices = services.map((service) =>
      service.id === editingService.id ? { ...service, ...data } : service
    );
    
    setServices(updatedServices);
    setEditingService(null);
    alert('Servicio actualizado correctamente');
  };

  const handleDeleteService = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Administración de Servicios
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            <LogOut className="h-5 w-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingService ? 'Editar Servicio' : 'Añadir Nuevo Servicio'}
          </h2>
          <ServiceForm
            onSubmit={editingService ? handleEditService : handleAddService}
            initialData={editingService || undefined}
          />
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {service.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {service.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {service.price.toLocaleString('es-ES', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => setEditingService(service)}
                      className="text-yellow-600 hover:text-yellow-900 mr-4"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    No hay servicios registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}