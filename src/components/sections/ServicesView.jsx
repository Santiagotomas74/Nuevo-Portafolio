
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Chip } from "@mui/material"; 
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessIcon from '@mui/icons-material/Business';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TerminalIcon from '@mui/icons-material/Terminal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';

// Configuración de Colores y Datos (Mantenemos tus datos originales)
const SERVICES_DATA = [
  {
    id: 'landing',
    title: 'Landing Page',
    subtitle: 'Conversión Directa',
    price: '$80 – $150 mil ARS',
    priceDetail: '',
    icon: <RocketLaunchIcon />,
    description: 'Estructura optimizada para captar clientes rápidamente.',
    features: ['1 página (one-page)',  'Diseño Grafico (Opcional)' , 'Diseño Responsive (mobile first)', 'Formulario de contacto o WhatsApp', 'Dominio y Hosting (Opcional)', 'Optimizacion Basica De Rendimiento', 'Soporte Post-Lanzamiento'],
    recommended: true
  },
  {
    id: 'corporate',
    title: 'Institucional',
    subtitle: 'Presencia de Marca',
    price: '$150 – $300 mil ARS',
    priceDetail: '',
    icon: <BusinessIcon />,
    description: 'Sitio robusto para empresas que buscan transmitir confianza.',
    features: ['Hasta 7 secciones', 'Diseño Grafico (Opcional)', 'Diseño Responsive (mobile first)','Panel de administración básico', 'Formulario + Mapa + contacto+ integraciones', 'Optimización SEO básica', 'Dominio y Hosting (Opcional)'],
    recommended: true
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Ventas 24/7',
    price: '$350 – $700 mil ARS',
    priceDetail: 'Según alcance y complejidad (Requiere mantenimiento mensual)',
    icon: <ShoppingCartIcon />,
    description: 'Tu tienda online con todo lo necesario para escalar.',
    features: ['Productos ilimitados', 'Carrito de compras', 'Pasarela de pago (MercadoPago / Stripe)', 'Panel de administrador: Gestión de Stock y ventas', 'Almacenamiento de productos en una Base de datos', 'Diseño Grafico (Opcional)', 'Diseño Responsive (mobile first)', 'Dominio y Hosting (Opcional)'],
    recommended: true
  },
   {
    id: 'system',
    title: 'Portal o Sistema Web',
    subtitle: 'Funcionalidad Avanzada',
    price: '$400 – $800 mil ARS',
    priceDetail: 'Según alcance y complejidad (Requiere mantenimiento mensual)',
    icon: <TerminalIcon sx={{ fontSize: 40 }} />,
    description: 'Ideal para reservas, empleo, agendas o membresías.',
    features: [
      'Usuarios y roles',
      'Panel personalizado',
      'Seccion de administración',
      'Funcionalidades avanzadas',
      'Arquitectura escalable',
      'Base de datos a medida', 'Diseño Grafico a medida', 'Diseño Responsive (mobile first)', 'Dominio y Hosting (Opcional)'
    ],
    recommended: true
  },
  {
  id: 'custom',
  title: 'Sistema Web a Medida (Personalizado)',
  subtitle: 'Soluciones Escalables',
  price: '$550 mil – $1.000.000+ ARS',
  priceDetail: 'Según alcance y complejidad (Requiere mantenimiento mensual)',
  icon: <TerminalIcon />,
  description: 'Desarrollo de plataformas web con lógica de negocio personalizada.',
  features: [
      'Diseño Grafico a medida', 'Diseño Responsive (mobile first)', 'Dominio y Hosting (Opcional)',
      'Arquitectura personalizada',
      'Backend + Frontend + Base de datos',
      'Integración con APIs',
      'Testing y escalabilidad',
      'Documentación técnica'
    ],
  recommended: false
}

];

const EXTRA_SERVICES = [
  { 
  title: 'Deploy & Hosting Setup',
  price: 'Incluido / A convenir',
  desc: 'Configuración de dominio, hosting y puesta en producción.'
}
,
  { 
  title: 'Integraciones & Automatizaciones',
  price: 'Desde $20k',
  desc: 'Conectamos tu web con pagos, CRMs y herramientas externas.'
}
,
{ 
  title: 'Optimización de Performance',
  price: '$30k+',
  desc: 'Mejora de velocidad, Core Web Vitals y experiencia de usuario.'
}
,
  { title: 'Rediseño Web', price: '$45k+', desc: 'Modernización visual total.' },
  { title: 'SEO Pro', price: '$35k+', desc: 'Posicionamiento en Google.' },
  { title: 'Gestión RRSS', price: '$25k/mes', desc: 'Branding y contenido.' },
  { title: 'Soporte VIP', price: '$12k+', desc: 'Asistencia técnica rápida.' },
];

function ServicesView() {
    const whatsappNumber = "541126042925"; 

    const handleConsult = (planName) => {
        const message = `Hola Santiago, me interesa recibir más información sobre el ${planName}.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="services-wrapper">
            <style>{`
                :root {
                    --primary: #00dbfc;
                    --primary-glow: rgba(0, 219, 252, 0.3);
                    --bg-dark: #020617;
                    --card-bg: rgba(15, 23, 42, 0.6);
                    --border: rgba(255, 255, 255, 0.08);
                    --text-main: #f8fafc;
                    --text-muted: #94a3b8;
                }

                .services-wrapper {
                    padding: 100px 24px;
                    background-color: var(--bg-dark);
                    background-image: 
                        radial-gradient(circle at 50% 0%, rgba(0, 219, 252, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 100% 100%, rgba(0, 219, 252, 0.05) 0%, transparent 40%);
                    min-height: 100vh;
                    font-family: 'Inter', system-ui, sans-serif;
                    color: var(--text-main);
                }

                .container { max-width: 1200px; margin: 0 auto; }

                .header { text-align: center; margin-bottom: 70px; }
                .header h1 { 
                    font-size: clamp(2.5rem, 6vw, 4rem); 
                    font-weight: 800; 
                    letter-spacing: -0.02em;
                    margin-bottom: 16px;
                    background: linear-gradient(to bottom, #fff 30%, var(--primary));
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                }

                .plans-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
                    gap: 24px;
                }

                .card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 40px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    backdrop-filter: blur(10px);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .card:hover {
                    border-color: var(--primary);
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
                }

                .card.recommended {
                    border: 2px solid var(--primary);
                    background: rgba(15, 23, 42, 0.8);
                }

                .icon-box {
                    width: 56px; height: 56px;
                    background: rgba(0, 219, 252, 0.1);
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    color: var(--primary);
                    margin-bottom: 24px;
                }

                .price-tag { margin: 24px 0; }
                .price-val { font-size: 2.5rem; font-weight: 800; color: #fff; }
                .price-detail { color: var(--text-muted); font-size: 0.9rem; display: block; }

                .feat-list { list-style: none; padding: 0; margin: 30px 0; flex-grow: 1; }
                .feat-item { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; color: #cbd5e1; font-size: 0.95rem; }
                .feat-icon { color: var(--primary); font-size: 18px; }

                .btn-primary {
                    background: var(--primary) !important;
                    color: #000 !important;
                    font-weight: 700 !important;
                    padding: 12px !important;
                    border-radius: 12px !important;
                    text-transform: none !important;
                    font-size: 1rem !important;
                }

                .maintenance-banner {
                    margin-top: 80px;
                    background: linear-gradient(90deg, rgba(0, 219, 252, 0.1), rgba(15, 23, 42, 0.9));
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    padding: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 30px;
                }

                .extra-mini-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 16px;
                    margin-top: 60px;
                }
                
                .extra-mini-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--border);
                    padding: 20px;
                    border-radius: 16px;
                    text-align: center;
                }
                    /* --- SECCIÓN MANTENIMIENTO --- */
.maintenance-pro {
  margin-top: 100px;
  padding: 0 20px;
}

.maintenance-card {
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 1));
  border: 1px solid rgba(0, 219, 252, 0.2);
  border-radius: 32px;
  padding: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Efecto de luz ambiental de fondo */
.maintenance-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -20%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 219, 252, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.maintenance-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 30px;
}

.maintenance-icon {
  font-size: 3rem;
  color: #00dbfc;
  background: rgba(0, 219, 252, 0.1);
  border: 1px solid rgba(0, 219, 252, 0.2);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.maintenance-header h3 {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.maintenance-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-top: 8px;
}

.maintenance-body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: center;
}

.maintenance-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 0;
  list-style: none;
}

.maintenance-features li {
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
}

.maintenance-price-box {
  text-align: center;
  padding: 30px;
  background: rgba(0, 219, 252, 0.03);
  border-radius: 24px;
  border: 1px dashed rgba(0, 219, 252, 0.3);
}

.maintenance-price {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.maintenance-price span {
  font-size: 2.5rem;
  font-weight: 800;
  color: #00dbfc;
  display: block;
}

.maintenance-cta {
  display: block;
  background: #00dbfc;
  color: #020617;
  padding: 16px 32px;
  border-radius: 14px;
  font-weight: 800;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -5px rgba(0, 219, 252, 0.4);
}

/* --- SECCIÓN EXTRAS --- */
.extras-section {
  margin-top: 100px;
  padding: 80px 20px;
}

.extras-header {
  text-align: center;
  margin-bottom: 60px;
}

.extras-header h3 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.extras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.extra-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.extra-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #00dbfc;
  transform: translateY(-5px);
}

.extra-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
}

.extra-price {
  font-size: 1.4rem;
  font-weight: 800;
  color: #00dbfc;
  margin-bottom: 4px;
}

.extra-alt-price {
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  .maintenance-body { grid-template-columns: 1fr; }
  .maintenance-header { flex-direction: column; text-align: center; }
  .maintenance-card { padding: 30px 20px; }
}
  /* --- RESPONSIVE ADJUSTMENTS --- */

@media (max-width: 1024px) {
    .plans-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .services-wrapper {
        padding: 60px 16px; /* Menos padding en móviles */
    }

    .header {
        margin-bottom: 40px;
    }

    .header h1 {
        font-size: 2.2rem; /* Título más manejable */
    }

    /* Ajuste de Tarjetas de Planes */
    .plans-grid {
        grid-template-columns: 1fr; /* Una columna en móvil */
        gap: 20px;
    }

    .card {
        padding: 24px; /* Menos espacio interno */
    }

    .price-val {
        font-size: 2rem;
    }

    /* Ajuste de Sección Mantenimiento */
    .maintenance-card {
        padding: 30px 20px;
        border-radius: 24px;
    }

    .maintenance-header {
        flex-direction: column; /* Icono arriba del texto */
        text-align: center;
        gap: 15px;
    }

    .maintenance-icon {
        width: 70px;
        height: 70px;
        font-size: 2.5rem;
    }

    .maintenance-header h3 {
        font-size: 1.5rem;
    }

    .maintenance-body {
        grid-template-columns: 1fr; /* Stack vertical */
        gap: 24px;
    }

    .maintenance-price-box {
        padding: 20px;
    }

    .maintenance-price span {
        font-size: 1.8rem;
    }

    /* Ajuste de Servicios Extras */
    .extras-section {
        margin-top: 60px;
        padding: 40px 0;
    }

    .extras-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .extra-card {
        padding: 20px;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .header h1 {
        font-size: 1.8rem;
    }
    
    .card.recommended {
        border-width: 1.5px; /* Bordes más finos para pantallas pequeñas */
    }

    /* Ajustar el Chip de "Recomendado" para que no tape el contenido */
    .card .MuiChip-root {
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 15px;
        width: fit-content;
    }
}
            `}</style>

            <div className="container">
                <header className="header">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Planes a medida
                    </motion.h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        Soluciones digitales de alto rendimiento para negocios escalables.
                    </p>
                </header>

                <div className="plans-grid">
                    {SERVICES_DATA.map((plan, i) => (
                        <motion.div 
                            key={plan.id}
                            className={`card ${plan.recommended ? 'recommended' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {plan.recommended && (
                                <Chip 
                                    label="RECOMENDADO" 
                                    sx={{ 
                                        position: 'absolute', top: 20, right: 20, 
                                        bgcolor: 'var(--primary)', color: '#000', fontWeight: 800, fontSize: '0.7rem' 
                                    }} 
                                />
                            )}
                            <div className="icon-box">
                                {React.cloneElement(plan.icon, { sx: { fontSize: 32 } })}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{plan.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{plan.description}</p>
                            
                            <div className="price-tag">
                                <span className="price-val">{plan.price}</span>
                                <span className="price-detail">{plan.priceDetail}</span>
                            </div>

                            <div className="feat-list">
                                {plan.features.map((feat, idx) => (
                                    <div key={idx} className="feat-item">
                                        <CheckCircleOutlineIcon className="feat-icon" />
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <Button 
                                variant="contained" 
                                className="btn-primary" 
                                fullWidth
                                onClick={() => handleConsult(plan.title)}
                            >
                                Iniciar Proyecto
                            </Button>
                        </motion.div>
                    ))}
                </div>

             <motion.section
  className="maintenance-pro"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="maintenance-card">
    <div className="maintenance-header">
      <div className="maintenance-icon">
        <SecurityIcon fontSize="inherit" />
      </div>

      <div>
        <h3>Mantenimiento Mensual & Soporte</h3>
        <p className="maintenance-subtitle">
          Tu sitio siempre seguro, actualizado y funcionando sin interrupciones.
        </p>
      </div>
    </div>

    <div className="maintenance-body">
      <div className="maintenance-price">
        Desde <span>$40 – $80 mil ARS</span> / mes
      </div>

      <ul className="maintenance-features">
        <li>🔒 Copias de seguridad semanales</li>
        <li>⚙️ Actualizaciones y parches de seguridad</li>
        <li>🛡️ Protección contra hackeos</li>
        <li>✏️ Cambios menores de contenido</li>
        <li>📈 Monitoreo de rendimiento</li>
      </ul>

      <motion.a
        href="#contact"
        className="maintenance-cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Solicitar mantenimiento
      </motion.a>
    </div>
  </div>
</motion.section>

                  <motion.section
  className="extras-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="extras-header">
    <h3>➕ Servicios Adicionales</h3>
    <p>
      Potenciá tu proyecto con servicios opcionales adaptados a tus necesidades.
    </p>
  </div>

  <div className="extras-grid">
    {EXTRA_SERVICES.map((service, idx) => (
      <motion.div
        key={idx}
        className="extra-card"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <h4>{service.title}</h4>

        <div className="extra-price">
          {service.price}
        </div>

        <span className="extra-alt-price">
          {service.altPrice}
        </span>
      </motion.div>
    ))}
  </div>
</motion.section>
            </div>
        </div>
    );
}

export default ServicesView;