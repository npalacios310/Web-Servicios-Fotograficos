import React, { useState } from 'react';
import type { ServiceFormData } from '../types';

interface ServiceFormProps {
  onSubmit: (data: ServiceFormData) => void;
  initialData?: ServiceFormData;
}

export default function ServiceForm({ onSubmit, initialData }: ServiceFormProps) {
  const [formData, setFormData] = useState<ServiceFormData>(
    initialData || {
      title: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
          rows={3}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Precio (€)</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
          min="0"
          step="0.01"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Categoría</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="bodas">Bodas</option>
          <option value="eventos">Eventos</option>
          <option value="retratos">Retratos</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">URL de la imagen</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
          placeholder="https://ejemplo.com/imagen.jpg"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition"
      >
        Guardar Servicio
      </button>
    </form>
  );
}