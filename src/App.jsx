import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clientes from './components/Clientes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Agenda from './components/Agenda'
import './styles.css'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clientes />
        <Contact />
        {/* Adicionando a seção com ID para a navegação funcionar */}
        <section id="agenda">
          <Agenda />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
