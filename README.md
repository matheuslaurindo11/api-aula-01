# API Aula 01

Projeto desenvolvido em **Node.js + Express** para a atividade de API.

## 📋 Requisitos

- Node.js instalado
- npm instalado
- Git (opcional)

## 🚀 Como executar o projeto

### 1. Baixar/clonar o projeto

Depois de baixar o projeto pelo GitHub:

```bash
git clone https://github.com/matheuslaurindo11/api-aula-01.git
cd api-aula-01
```

### 2. Instalar as dependências

Sempre que baixar o projeto pela primeira vez, execute:

```bash
npm install
```

Isso instala as dependências do `package.json`.

### 3. Iniciar o servidor

Para iniciar o projeto:

```bash
npm run dev
```

O servidor será iniciado e poderá ser acessado pelo endereço configurado no projeto.

Exemplo:

```text
http://localhost:3030
```

### 4. Acessar a rota de chamados

A rota principal de chamados é:

```text
http://localhost:3030/chamados
```

Você pode testar as requisições usando o **Postman**.

## 🛑 Como parar o servidor

No terminal onde o servidor está rodando:

```text
Ctrl + C
```

## 🔄 Comandos principais

| Comando | Função |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia o servidor com Nodemon |
| `npm start` | Inicia o projeto, caso exista esse script |
| `git status` | Verifica alterações no Git |
| `git add .` | Adiciona alterações |
| `git commit -m "mensagem"` | Cria um commit |
| `git push` | Envia alterações para o GitHub |

## 📦 Depois de alterar o projeto

Quando fizer alterações:

```bash
git add .
git commit -m "Atualização do projeto"
git push
```

## ⚠️ Importante

A pasta `node_modules` não deve ser enviada para o GitHub.

Se acabou de baixar o projeto e a pasta `node_modules` não existir, basta executar:

```bash
npm install
```

Depois:

```bash
npm run dev
```

## 🧠 Resumo para lembrar na sala

```bash
# Entrar na pasta
cd api-aula-01

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

Para parar:

```text
Ctrl + C
```

Para enviar alterações ao GitHub:

```bash
git add .
git commit -m "Atualização"
git push
``` 
