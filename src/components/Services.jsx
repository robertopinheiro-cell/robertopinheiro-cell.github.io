function Services() {
  const services = [
    {
      id: 'consultoria',
      title: 'Consultoria',
      description: 'Orientação especializada para o crescimento do seu negócio.'
    },
    {
      id: 'desenvolvimento',
      title: 'Desenvolvimento',
      description: 'Criação de soluções tecnológicas personalizadas.'
    },
    {
      id: 'suporte',
      title: 'Suporte',
      description: 'Assistência técnica completa para sua empresa.'
    }
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
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
