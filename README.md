# Teste Técnico: Sistema de Notificações por E-mail com Fallback (Front-end)

Este é o front-end de um sistema de recuperação de senha com envio de e-mail, desenvolvido com **React.js**. O sistema permite o registro, login, recuperação de senha e visualização de logs de envio de e-mail. O back-end da aplicação foi desenvolvido em **Spring Boot**.

Acessar repositorio [Back-end](https://github.com/RonaldoFidelis/DT-BACK)

---

## 🧪 Funcionalidades

- Registro e login de usuários.
- Recuperação de senha via e-mail.
- Visualização de logs de envio de e-mails.
- Sistema de notificação e feedback visual.
- Rotas protegidas e controle de autenticação com token JWT.

---

## 🧱 Tecnologias utilizadas

- React
- React Router DOM
- TailwindCSS / CSS Modules
- Fetch API
- Context API + Hooks
- SessionStorage
- Vite

---

## 📁 Estrutura de pastas

```bash
src/
│
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── auth/               # Roteamento e segurança
├── hooks/              # Hooks customizados (ex: useFetch, useLog)
├── context/            # Context API (ex: LogProvider)
├── services/           # Requisições para a API
├── App.jsx             # Definição de rotas
└── main.jsx            # Entry point
````

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/RonaldoFidelis/DT-FRONT.git
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure a URL da API

Crie um arquivo `.env` na raiz do projeto:

```
VITE_API_URL=http://localhost:8080/auth
```

> Certifique-se de que o back-end esteja rodando na porta correta.

### 4. Inicie o servidor

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## 🔐 Rotas protegidas

* `/dashboard`: acessível apenas com token válido.
* Se o usuário não estiver autenticado, é redirecionado para o `/`.

---

## 📊 Logs

O Dashboard consome os logs de envio de e-mail através da rota:

```
GET /auth/log
```

Cada log possui:

* ✅ Status (sucesso ou falha)
* 📧 Destinatário
* 📝 Mensagem
* ⏱️ Data/hora do envio
* ⚠️ Descrição do erro (caso exista)

---

## 🚀 Possiveis funcionalidades futuras

* Redefinir a senha a partir do link enviado.
* Página de perfil com alteração de dados.

---

## 🧑‍💻 Autor

* Nome: **Ronaldo Fidelis**
* [LinkedIn](https://www.linkedin.com/in/ronaldo-fidelis-9922941a9/)
* [GitHub](https://github.com/RonaldoFidelis)

---
