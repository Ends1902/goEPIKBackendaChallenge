# 📚 Biblioteca API - Gerenciador de Livros

Um gerenciador moderno de livros com backend em Express.js e frontend responsivo.

## 🚀 Começando

### Pré-requisitos

- Node.js (v16 ou superior)
- npm (incluído com Node.js)

### Instalação

1. Clone ou baixe o projeto
2. Navegue até a pasta do projeto:
   ```bash
   cd backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Executar o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em:
- **Frontend**: http://localhost:3000/
- **API**: http://localhost:3000/books
- **Swagger Docs**: http://localhost:3000/api-docs

## 📖 Como Usar

### Visualizar Livros

Abra seu navegador e acesse:
```
http://localhost:3000/
```

Os livros serão exibidos como cards modernos com suas capas coloridas.

### API Endpoints

#### Listar todos os livros
```bash
GET http://localhost:3000/books
```

#### Adicionar um novo livro
```bash
POST http://localhost:3000/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

### Documentação Swagger

Para ver a documentação interativa da API:
```
http://localhost:3000/api-docs
```

## 📁 Estrutura do Projeto

```
backend/
├── public/
│   └── index.html           # Frontend moderno
├── src/
│   ├── data/
│   │   └── books.ts         # Base de dados de livros
│   ├── routes/
│   │   └── books.routes.ts  # Rotas da API
│   ├── types/
│   │   └── Book.ts          # Tipos TypeScript
│   ├── server.ts            # Servidor Express
│   └── swagger.ts           # Configuração Swagger
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação
- **Swagger** - Documentação da API
- **CORS** - Compartilhamento de recursos entre origens
- **UUID** - Geração de IDs únicos

## 💾 Scripts Disponíveis

```bash
# Iniciar servidor em modo desenvolvimento
npm run dev

# Compilar TypeScript
npm run build
```

## 🎨 Design Frontend

- Gradiente moderno roxo/azul
- Cards responsivos com capas coloridas
- Animações suaves e elegantes
- Interface totalmente responsiva (mobile-friendly)
- Sincronização automática a cada 5 segundos

## 📝 Notas

- O servidor roda por padrão na porta **3000**
- A base de dados é mantida em memória (reinicia ao parar o servidor)
- CORS está habilitado para requisições locais

## ❓ Problemas Comuns

### Porta 3000 já está em uso
Se a porta 3000 já está sendo usada, você pode mudar no arquivo `src/server.ts`:
```typescript
const PORT = 3001; // Mude para outra porta
```

### Módulos não encontrados
Se receber erro de módulos não encontrados, execute:
```bash
npm install
```

---

**Desenvolvido com ❤️ para gerenciar seus livros favoritos**
