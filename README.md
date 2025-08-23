# Tri Tempo - Aplicativo de Clima com API

## Visão Geral

Este projeto é um aplicativo de web que permite aos usuários consultar o clima atual de qualquer cidade do mundo. As informações são obtidas em tempo real através de uma chamada à API pública da [OpenWeatherMap](https://openweathermap.org/api).

O projeto foi construído com tecnologias web fundamentais (HTML, CSS e JavaScript) e serve como uma demonstração prática de como interagir com APIs externas, lidar com requisições assíncronas e manipular dados dinamicamente no front-end.

## Funcionalidades

- **Integração com API Externa**: Consome dados em tempo real da API da OpenWeatherMap.
- **Busca por Cidade**: Permite que o usuário insira o nome de uma cidade para obter a previsão do tempo.
- **Exibição Dinâmica de Dados**: Atualiza a interface do usuário com os dados recebidos, como temperatura, condição do tempo (ex: "céu limpo") e um ícone representativo.
- **Tratamento de Erros**: Fornece feedback ao usuário em caso de erros, como cidade não encontrada ou problemas na chave da API.

## Tecnologias e Conceitos Aplicados

- **HTML5**: Para a estrutura básica da página.
- **CSS3**: Para a estilização e o layout, criando uma interface limpa e agradável.
- **JavaScript (ES6+)**: Utilizado para toda a interatividade e lógica, incluindo:
  - **Fetch API**: Para realizar as chamadas HTTP para a API externa.
  - **Async/Await**: Para gerenciar o código assíncrono de forma limpa e legível.
  - **Manipulação do DOM**: Para exibir os dados recebidos na tela.
  - **Tratamento de Respostas JSON**: Para converter os dados recebidos pela API em objetos JavaScript utilizáveis.
