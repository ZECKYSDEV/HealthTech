🩺 Sistema Cuidado Organizado

Este projeto foi desenvolvido como parte do Desafio 2 Empower M1/N1 – Módulo Backend. O objetivo é solucionar a fragmentação de informações na rotina de uma cuidadora de idosos autônoma.

📋 O Problema IdentificadoA cuidadora enfrenta dificuldades para gerenciar as particularidades de cada paciente, pois as informações estão espalhadas em cadernos, mensagens de celular e na memória. Isso gera um esforço maior do que o necessário para manter o controle e dificulta a visualização da evolução do paciente para os familiares.

💡 Solução Proposta

Uma aplicação Backend que centraliza o histórico de atendimento e a evolução diária.
Registro de Evolução: Substitui as anotações informais por um log estruturado de atividades e observações.
Histórico Centralizado: Permite uma visão clara e rápida da saúde do paciente ao longo do tempo.

🛠️ Tecnologias Utilizadas
Ambiente: Node.js 
Banco de Dados: SQLite (Persistência local) 
Linguagem: JavaScript (ES6+)
Frontend (Complementar): HTML5, CSS3 e Vanilla JS 

🚀 Como Executar o Projeto

Pré-requisitos: Certifique-se de ter o Node.js instalado.
Instalação: No terminal, dentro da pasta do projeto, instale as dependências:
Bash
npm install express sqlite3 cors
Iniciar o Servidor:
Bash
node server.js
O servidor iniciará na porta 3000 e criará automaticamente 4 pacientes para teste.
Acessar a Interface: Abra o arquivo index.html em seu navegador ou utilize a extensão Live Server do VS Code.

📁 Estrutura de Arquivos

server.js: Servidor API e lógica de banco de dados.
index.html: Interface visual para interação com a cuidadora.
cuidadora.db: Arquivo do banco de dados SQLite gerado automaticamente.
package.json: Manifesto do projeto e dependências.