function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Bem-vindo à Nossa Empresa</h2>
        <p>Soluções inovadoras para o seu negócio</p>
        <a href="#contato" className="btn" onClick={handleContactClick}>
          Entre em Contato
        </a>
      </div>
    </section>
  );
}

export default Hero;
