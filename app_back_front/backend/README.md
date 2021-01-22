## Criar o package.json
npm init -y 

## Configurar
* --save para salvar as dependencia no desenv quanto na producao
* No front nao precisa pois serao gerados arquivos js e html
* -E versao exata
* pm2(usado em producao) evita de parar a versao quando tiver um erro, otimizar a execução da aplicaçao
* pm2 monit para verificar os processos da aplicacao

npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5

* Somente em ambinete de dev
npm i --save-dev -E nodemon@1.11.0