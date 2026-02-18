import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaEnvelope className="icon" />
            <span><strong>Email:</strong> contato@ropconsultoria.tech</span>
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaPhone className="icon" />
            <span><strong>Telefone:</strong> (00) 0000-0000</span>
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FaMapMarkerAlt className="icon" />
            <span><strong>Endereço:</strong> Rua Exemplo, 123 - Cidade, Estado</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
