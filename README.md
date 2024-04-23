# Playwright-eXpress 
Automação de teste E2E com o Framework Playwright do Curso Playwright-eXpress da [QAx Academy](https://qaxperience.com/)

Nesse repositório encontram-se os testes E2E e também teste de API

## Tecnologias aplicadas
- Playwright
- TypeScript

## Sobre a  aplicação Mark L
Mark L, que é um gerenciador de tarefas para web, disponibilizado pela equipe do QAx Academy
A aplicação roda localmente na porta 8080, para os teste deve-se fazer o download da aplicação no seguinte [link](https://drive.google.com/drive/u/0/folders/1o87CM_4Vln4XV2NYA3W-2nMMcLifFiO8), criar uma pasta chamada apps na raiz do projeto e descompactar o arquivo zip nessa pasta.

* Para o teste e2e, abrir a pasta apps/web e rodar o seguinte comando `yarn dev` para subir a aplicação para o endereço: http://localhost:8080/
* Para o teste de API abrir a pasta apps/api e rodar o seguinte comando `yarn dev`

## Automação
Para rodar a automação é preciso seguir os seguntes passos:

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Executar testes em Headless
```
npx playwright test 
```

3. Executar ver o relatório dos testes
```
npx playwright show-report
```

