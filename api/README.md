# WaiterApp API

API desenvolvida para o aplicativo de garçom, permitindo gerenciar categorias, produtos e pedidos de um restaurante.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Superset do JavaScript com tipagem estática
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Docker** - Containerização do MongoDB
- **Nodemon** - Monitoramento automático de alterações
- **ESLint** - Linting e formatação de código

## 🏗️ Arquitetura

O projeto segue os princípios da Clean Architecture:

```
src/
├── app/
│   ├── models/           # Modelos de dados (Mongoose schemas)
│   └── use-cases/        # Casos de uso da aplicação
├── index.ts             # Ponto de entrada da aplicação
└── router.ts            # Configuração das rotas
```

## 📋 Funcionalidades

### Categorias

- `GET /categories` - Listar todas as categorias
- `POST /categories` - Criar uma nova categoria

### Produtos

- `GET /products` - Listar todos os produtos
- `POST /products` - Criar um novo produto
- `GET /categories/:categoryId/products` - Listar produtos por categoria

### Pedidos

- `GET /orders` - Listar todos os pedidos
- `POST /orders` - Criar um novo pedido
- `PATCH /orders/:orderId` - Atualizar status do pedido
- `DELETE /orders/:orderId` - Cancelar pedido

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd waiterapp-api
```

2. Instale as dependências:

```bash
yarn install
```

3. Execute o MongoDB com Docker:

```bash
docker-compose up -d
```

4. Execute a aplicação em modo de desenvolvimento:

```bash
yarn dev
```

A API estará disponível em `http://localhost:3001`

## 📦 Scripts Disponíveis

- `yarn dev` - Executa a aplicação em modo de desenvolvimento
- `yarn build` - Compila o TypeScript para JavaScript

## 🐳 Docker

O projeto inclui configuração do MongoDB via Docker Compose:

```yaml
# docker-compose.yml
services:
  mongo:
    image: mongo:latest
    container_name: mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: user
      MONGO_INITDB_ROOT_PASSWORD: password
```

## 📊 Modelos de Dados

### Category

- `name` (String) - Nome da categoria
- `icon` (String) - Ícone da categoria

### Product

- `name` (String) - Nome do produto
- `description` (String) - Descrição do produto
- `imagePath` (String) - Caminho da imagem
- `price` (Number) - Preço do produto
- `ingredients` (Array) - Lista de ingredientes
- `category` (ObjectId) - Referência à categoria

### Order

- `table` (String) - Número da mesa
- `status` (String) - Status do pedido (WAITING, IN_PRODUCTION, DONE)
- `createdAt` (Date) - Data de criação
- `products` (Array) - Lista de produtos com quantidades

## 🔄 Status do Desenvolvimento

- ✅ Configuração inicial do projeto
- ✅ Modelos de dados implementados
- ✅ Estrutura de rotas definida
- ⏳ Implementação dos casos de uso em andamento
- ⏳ Validação de dados
- ⏳ Tratamento de erros
- ⏳ Documentação da API

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do GitHub.
