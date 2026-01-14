# Instruções para Publicar no GitHub

## Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name**: escolha um nome (ex: `esteta-vision` ou `meu-esteta-vision`)
   - **Description**: (opcional) Descrição do projeto
   - **Visibility**: Escolha Public ou Private
   - **NÃO marque** "Initialize this repository with a README" (já temos código)
3. Clique em **"Create repository"**

## Passo 2: Conectar e Fazer Push

Após criar o repositório, o GitHub mostrará comandos. Use estes comandos adaptados:

```bash
# Adicionar o novo remote (substitua SEU-USUARIO e NOME-REPO)
git remote add origin https://github.com/SEU-USUARIO/NOME-REPO.git

# Verificar se foi adicionado corretamente
git remote -v

# Fazer push do código
git push -u origin main
```

## Passo 3: Criar o arquivo .env.local

Crie manualmente o arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-key-aqui
```

**Importante**: Este arquivo não será commitado (está no .gitignore) e é necessário para o funcionamento da aplicação.

## Pronto! 🎉

Seu código está agora no seu repositório GitHub pessoal.
