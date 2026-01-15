import Navbar from "./NavBar";
import Services from "@/components/sections/ServicesView";

export default function Home() {
  return (
    
   <div>
      <Navbar/>
        <Services />

    </div>
    
  );
}


/*


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
    price: '$45.000',
    priceDetail: '$45k – $75k ARS',
    icon: <RocketLaunchIcon />,
    description: 'Estructura optimizada para captar clientes rápidamente.',
    features: ['1 página (one-page)', 'Diseño mobile-first', 'Botón WhatsApp/Form', 'Optimización de carga'],
    recommended: false
  },
  {
    id: 'corporate',
    title: 'Institucional',
    subtitle: 'Presencia de Marca',
    price: '$110.000',
    priceDetail: '$110k – $165k ARS',
    icon: <BusinessIcon />,
    description: 'Sitio robusto para empresas que buscan transmitir confianza.',
    features: ['Hasta 7 secciones', 'Panel de administración', 'SEO Base incluido', 'Mapa e Integraciones'],
    recommended: true
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Ventas 24/7',
    price: '$165.000',
    priceDetail: '$165k – $330k ARS',
    icon: <ShoppingCartIcon />,
    description: 'Tu tienda online con todo lo necesario para escalar.',
    features: ['Carrito de compras', 'MercadoPago / Stripe', 'Gestión de Stock', 'Seguridad SSL'],
    recommended: false
  },
  {
  id: 'custom',
  title: 'Sistema Web a Medida',
  subtitle: 'Soluciones Escalables',
  price: 'A cotizar',
  priceDetail: 'Según alcance y complejidad',
  icon: <TerminalIcon />,
  description: 'Desarrollo de plataformas web con lógica de negocio personalizada.',
  features: [
    'Usuarios y roles',
    'Panel administrativo',
    'Integración con APIs',
    'Base de datos',
    'Arquitectura escalable'
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
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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

                <motion.div 
                    className="maintenance-banner"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                            <SecurityIcon sx={{ color: 'var(--primary)' }} />
                            <h3 style={{ margin: 0 }}>Mantenimiento & Seguridad</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                            Nos encargamos de que tu web esté siempre online, protegida y actualizada.
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '10px' }}>Desde $30 USD <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mes</span></div>
                       <Button 
  sx={{ 
    color: 'var(--primary)', 
    borderColor: 'var(--primary)' 
  }} 
  variant="outlined"
>
  Más detalles
</Button>

                    </div>
                </motion.div>

                <div className="extra-mini-grid">
                    {EXTRA_SERVICES.map((s, i) => (
                        <div key={i} className="extra-mini-card">
                            <h4 style={{ margin: '0 0 5px 0' }}>{s.title}</h4>
                            <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{s.price}</div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '5px 0 0 0' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesView;


  {
    id: 'system',
    title: 'Portal o Sistema Web',
    subtitle: 'Funcionalidad Avanzada',
    price: '$275.000 – $550.000 ARS',
    altPrice: 'USD 500 – 1100',
    icon: <TerminalIcon sx={{ fontSize: 40 }} />,
    description: 'Ideal para reservas, empleo, agendas o membresías.',
    features: [
      'Usuarios y roles',
      'Panel personalizado',
      'Funcionalidades avanzadas',
      'Arquitectura escalable',
      'Base de datos a medida'
    ],
    recommended: false
  },
  {
    id: 'custom',
    title: 'Desarrollo Web a Medida',
    subtitle: 'Grandes Proyectos',
    price: '$550.000 – $1.100.000+ ARS',
    altPrice: 'USD 1100 – 3000+',
    icon: <TerminalIcon sx={{ fontSize: 40 }} />,
    description: 'Soluciones complejas para empresas o startups.',
    features: [
      'Arquitectura personalizada',
      'Backend + Frontend',
      'Integración con APIs',
      'Testing y escalabilidad',
      'Documentación técnica'
    ],
    recommended: false,
    isCustom: true
  
    }


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
        Desde <span>$30 – $50 USD</span> / mes
      </div>

      <ul className="maintenance-features">
        <li>🔒 Copias de seguridad semanales</li>
        <li>⚙️ Actualizaciones y parches de seguridad</li>
        <li>🛡️ Protección contra hackeos</li>
        <li>✏️ Cambios menores de contenido</li>
        <li>📊 Monitorización 24/7</li>
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
*/