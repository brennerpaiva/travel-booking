# Sistema de Reserva de Viagens

## Visão Geral

O TripIt uma aplicação web desenvolvida para facilitar a busca, visualização e reserva de viagens. A aplicação oferece uma série de recursos para tornar a experiência dos usuários agradável e segura. O Sistema de Reserva de Viagens foi criado durante a Full Stack Week onde tive a oportunidade de aprender mais sobre tecnologias front-end e back-end. 

## Funcionalidades

### Buscar Viagens

- Os usuários podem pesquisar viagens com base em critérios específicos, incluindo localização, data de início da viagem e orçamento máximo. 

### Ver Detalhes de uma Viagem

- Os usuários podem visualizar detalhes completos de uma viagem, incluindo:
  - Fotos (4)
  - Descrição da viagem
  - Imagem de capa da viagem
  - Destaques (como Wi-Fi, piscina, etc.)
  - Preço por noite
  - Datas disponíveis
  - Número de hóspedes permitidos
  - Localização

### Reservar Viagens

- Os usuários logados podem reservar viagens e o sistema garante que:
  - A data selecionada não foi reservada por outro usuário
  - O número máximo de hóspedes é respeitado

### Ver Viagens Reservadas

- Os usuários logados tem a opção de visualizar as viagens que reservaram anteriormente. Isso fornece uma maneira conveniente de gerenciar as viagens confirmadas.

### Cancelar Viagens Reservadas

- Os usuários logados podem cancelar viagens reservadas, e o sistema garante que a data fique disponível.

## Tecnologias Utilizadas

 - <img width="20px" src="https://github.com/tandpfun/skill-icons/blob/main/icons/NextJS-Light.svg" /> Next.js: O Next.js é o framework utilizado para o desenvolvimento do front-end da aplicação, proporcionando uma experiência de página única (SPA) com suporte a roteamento e renderização do lado do servidor (SSR).

- <img width="20px" src="https://skillicons.dev/icons?i=typescript" />  TypeScript: O TypeScript é utilizado para fornecer tipagem estática ao código, melhorando a segurança e a manutenibilidade.

- <img width="20px" src="https://skillicons.dev/icons?i=tailwind" /> Tailwind CSS: O Tailwind CSS é a biblioteca de estilização utilizada, aproveitando recursos como classes utilitárias para facilitar a estilização.

- <img width="20px" src="https://skillicons.dev/icons?i=prisma" />  Prisma: Foi utilizado o Prisma como ORM (Object-Relational Mapping) para simplificar a interação com o banco de dados PostgreSQL.

- <img width="20px" src="https://github.com/nextauthjs/next-auth/blob/main/docs/static/img/logo/logo.png" /> NextAuth.js: O sistema de autenticação foi implementado utilizando o NextAuth.js, com suporte para autenticação via Gmail.

- <img width="20px" src="https://cdn-icons-png.flaticon.com/128/756/756940.png" /> Bibliotecas Adicionais: A aplicação utiliza diversas bibliotecas, incluindo React Date Picker, date-fns, React Currency Input Field, react-toastify e outras para melhorar a usabilidade e a funcionalidade.


## Integração do Stripe

O Stripe é utilizado para processar pagamentos de forma segura e eficiente. A integração do Stripe permite aos usuários realizar pagamentos por cartão de crédito e débito diretamente pela plataforma. O Stripe é configurado em "modo de teste" durante o desenvolvimento, garantindo que todas as transações sejam simuladas e seguras.

![tripIt-fluxo drawio (2)](https://github.com/brennerpaiva/travel-booking/assets/114958953/f056f97e-8f26-4259-a06d-6a1d402f49b3)



