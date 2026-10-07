# ERP-SISTEMA-2025

Projeto de um sistema de gestão desenvolvido para colocar em prática conhecimentos de desenvolvimento web.

A ideia do projeto é construir o sistema por partes, começando pela interface e evoluindo as funcionalidades conforme o desenvolvimento avança.

## Estrutura atual

    ERP SISTEMA 01/
    └── public/
        ├── login.html
        ├── painel.html
        ├── usuarios.html
        │
        ├── css/
        │   ├── base.css
        │   ├── login.css
        │   ├── painel.css
        │   └── usuarios.css
        │
        └── js/
            └── menu.js

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Telas

### Login
 Tela inicial para entrada no sistema.

### Painel
 Área principal do sistema, com espaço para informações e futuras estatísticas.

### Usuários
 Tela para cadastro e listagem de usuários.

## Organização do código

Os estilos gerais ficam em base.css.

Cada tela possui seu próprio arquivo CSS para evitar colocar toda a estilização em um único arquivo.

O comportamento do menu lateral foi separado para js/menu.js, evitando repetir o mesmo JavaScript em cada página.

## Situação atual

O projeto está em desenvolvimento.

A interface principal já possui:

- Menu lateral recolhível
- Painel principal
- Tela de usuários
- Formulário de cadastro
- Tabela de usuários
- Organização dos estilos por tela
- Estrutura inicial de JavaScript

Ainda precisam ser desenvolvidas as partes de funcionamento do sistema, como autenticação, persistência dos usuários, banco de dados, controle de acesso e demais módulos do ERP.

## Próximos passos

1. Definir o backend.
2. Definir o banco de dados.
3. Implementar login e autenticação.
4. Implementar cadastro e gerenciamento de usuários.
5. Criar níveis de acesso.
6. Evoluir o painel.
7. Criar os demais módulos do ERP.

## Observação

Este projeto começou como desenvolvimento prático e foi evoluindo por etapas. A organização atual busca manter essa evolução, mas deixando o código mais fácil de entender, continuar e manter.