# ROP Consultoria TI

Site oficial da ROP Consultoria TI - Especializada em Oracle Rightnow

🌐 **Site:** [www.ropconsultoria.tech](https://www.ropconsultoria.tech)

## 🚀 Tecnologias

Este site foi desenvolvido com:

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderno e rápido
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm (vem com Node.js)

## 🛠️ Instalação e Desenvolvimento

### 1. Clonar o repositório

```bash
git clone https://github.com/robertopinheiro-cell/robertopinheiro-cell.github.io.git
cd robertopinheiro-cell.github.io
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar em modo de desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 4. Fazer build de produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`

### 5. Preview do build de produção

```bash
npm run preview
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa linter ESLint

## 🚀 Deploy

O deploy é feito **automaticamente** via GitHub Actions:

1. Faça commit das suas alterações
2. Faça push para a branch `main`
3. GitHub Actions automaticamente:
   - Instala dependências
   - Cria o build de produção
   - Faz deploy para GitHub Pages

O site é atualizado automaticamente em poucos minutos.

### Configuração GitHub Pages

Para configurar GitHub Pages pela primeira vez:

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow `.github/workflows/deploy.yml` cuidará do resto

## 📁 Estrutura do Projeto

```
robertopinheiro-cell.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de deploy automático
├── public/
│   ├── CNAME                   # Configuração domínio customizado
│   └── vite.svg
├── src/
│   ├── components/             # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Entry point
│   └── styles.css              # Estilos globais
├── index.html                  # HTML template
├── vite.config.js             # Configuração Vite
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

## 📞 Contatos

- **Email:** contato@ropconsultoria.tech / robertorj@gmail.com
- **Telefone:** +55 21 97639-4275 / +55 21 99434-8981

---

© 2026 ROP Consultoria TI. Todos os direitos reservados.

