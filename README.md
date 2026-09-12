# 🏀 NBA Gallery

> Aplicação desenvolvida para demonstrar a criação de componentes reutilizáveis (`Card` e `Header`), estilização modular e renderização dinâmica no React.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?style=flat&logo=css3)](https://github.com/css-modules/css-modules)

---

## 📌 Sobre o Projeto

O **NBA Gallery** é um projeto prático e didático voltado para o aprendizado dos conceitos fundamentais de desenvolvimento **Front-end com React**. 

Nesta aplicação, os alunos aprendem a:
- Estruturar componentes funcionais reutilizáveis (`<Header />` e `<Card />`).
- Manipular dados dinâmicos com estado (`useState`) e renderizar listas usando `.map()`.
- Passar dados entre componentes pai e filho via **props**.
- Evitar colisões de estilo global utilizando **CSS Modules** e **CSS Grid/Flexbox**.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)** — Build tool rápida e leve para projetos web.
- **[CSS Modules](https://github.com/css-modules/css-modules)** — Estilização com escopo local encapsulado por componente.

---

## 📁 Estrutura de Arquivos

```text
src/
├── assets/                # Imagens e recursos estáticos
├── components/
│   ├── Card/
│   │   ├── Card.jsx       # Componente de exibição do card do jogador
│   │   └── Card.module.css# Estilos isolados do Card
│   └── Header/
│       ├── Header.jsx     # Componente do cabeçalho da aplicação
│       └── Header.module.css # Estilos isolados do Header
├── App.jsx                # Componente principal que unifica a aplicação
├── App.module.css         # Grid e layout principal
└── main.jsx               # Ponto de entrada do React