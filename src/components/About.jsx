import { motion } from 'framer-motion';

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Nós
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Somos uma empresa comprometida em oferecer os melhores serviços e 
          soluções para nossos clientes. Com anos de experiência no mercado, 
          nos dedicamos a entregar qualidade e excelência em cada projeto.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Nossa missão é transformar ideias em realidade, ajudando empresas a 
          alcançarem seus objetivos com inovação e profissionalismo.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
