function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>ROP Consultoria TI</h1>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Início</a></li>
          <li><a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>Sobre</a></li>
          <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')}>Serviços</a></li>
          <li><a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
