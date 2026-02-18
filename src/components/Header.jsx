import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'sobre', 'servicos', 'clientes', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <div className="logo">
          <h1>ROP Consultoria TI</h1>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Início
            </a>
          </li>
          <li>
            <a 
              href="#sobre" 
              onClick={(e) => handleNavClick(e, 'sobre')}
              className={activeSection === 'sobre' ? 'active' : ''}
            >
              Sobre
            </a>
          </li>
          <li>
            <a 
              href="#servicos" 
              onClick={(e) => handleNavClick(e, 'servicos')}
              className={activeSection === 'servicos' ? 'active' : ''}
            >
              Serviços
            </a>
          </li>
         <li>
            <a 
              href="#clientes" 
              onClick={(e) => handleNavClick(e, 'clientes')}
              className={activeSection === 'clientes' ? 'active' : ''}
            >
              Clientes
            </a>
          </li>
          <li>
            <a 
              href="#contato" 
              onClick={(e) => handleNavClick(e, 'contato')}
              className={activeSection === 'contato' ? 'active' : ''}
            >
              Contato2
            </a>
          </li>
        </ul>
        <div 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
