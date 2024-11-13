import React, { useState } from 'react';
import { Camera, Heart, Image as ImageIcon, Mail, Phone, Star, Users } from 'lucide-react';
import Navbar from '../components/Navbar';

function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
            alt="Fotografía artística"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Capturando Momentos Únicos
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            10% de descuento en tu primera sesión fotográfica
          </p>
          <div className="bg-white/90 p-6 rounded-lg max-w-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition"
              >
                Obtener 10% de Descuento
              </button>
            </form>
            {submitted && (
              <p className="text-green-600 mt-2">¡Gracias! Te contactaremos pronto.</p>
            )}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="h-8 w-8" />,
              title: "Bodas y Eventos",
              description: "Capturamos la magia y emoción de tu día especial"
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Retratos",
              description: "Sesiones personalizadas que resaltan tu personalidad"
            },
            {
              icon: <ImageIcon className="h-8 w-8" />,
              title: "Fotografía Comercial",
              description: "Imágenes profesionales para tu negocio"
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition">
              <div className="inline-block p-3 bg-yellow-400 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
          {[
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          ].map((img, index) => (
            <div key={index} className="relative overflow-hidden group aspect-square">
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "María González",
              text: "Una experiencia increíble. Las fotos de mi boda quedaron espectaculares."
            },
            {
              name: "Carlos Ruiz",
              text: "Profesionalismo y creatividad en cada sesión. Totalmente recomendado."
            },
            {
              name: "Ana Martínez",
              text: "Las fotos familiares son un tesoro que guardaremos para siempre."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span>info@fotoartstudio.es</span>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-bold">FotoArt Studio</span>
          </div>
          <p className="text-gray-400">© 2024 FotoArt Studio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;