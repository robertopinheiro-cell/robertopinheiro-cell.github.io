import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaHeadset } from 'react-icons/fa';

function Clientes() {
  const services = [
    {
      id: 'consultoria',
      title: 'Consultoria',
      description: 'Orientação especializada para o crescimento do seu negócio.',
      icon: FaLightbulb
    },
    {
      id: 'desenvolvimento',
      title: 'Desenvolvimento',
      description: 'Criação de soluções tecnológicas personalizadas.',
      icon: FaCode
    },
    {
      id: 'suporte',
      title: 'Suporte',
      description: 'Assistência técnica completa para sua empresa.',
      icon: FaHeadset
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicos" className="services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="icon">
                  <IconComponent size={60} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Clientes;
