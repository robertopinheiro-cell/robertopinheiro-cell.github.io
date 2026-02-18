function Services() {
  const services = [
    {
      title: 'Consultoria',
      description: 'Orientação especializada para o crescimento do seu negócio.'
    },
    {
      title: 'Desenvolvimento',
      description: 'Criação de soluções tecnológicas personalizadas.'
    },
    {
      title: 'Suporte',
      description: 'Assistência técnica completa para sua empresa.'
    }
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
