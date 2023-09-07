# Sistema de Reserva de Viagens

## Visão Geral

O Sistema de Reserva de Viagens é uma aplicação web que foi criada durante a Full Stack Week. O sistema permite aos usuários buscar e reservar viagens de acordo com sua localização, data inicial e orçamento máximo. Além disso, os usuários podem visualizar detalhes completos de uma viagem, incluindo fotos, descrição, comodidades, preço por noite, data disponível, número de hóspedes permitidos e localização. A aplicação também suporta a funcionalidade de ver viagens reservadas, cancelar reservas e garantir a disponibilidade de datas e limites de hóspedes.

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

- Next.js: O Next.js é o framework utilizado para o desenvolvimento do front-end da aplicação, proporcionando uma experiência de página única (SPA) com suporte a roteamento e renderização do lado do servidor (SSR).

- TypeScript: O TypeScript é utilizado para fornecer tipagem estática ao código, melhorando a segurança e a manutenibilidade.

- Tailwind CSS: O Tailwind CSS é a biblioteca de estilização utilizada, aproveitando recursos como classes utilitárias para facilitar a estilização e manutenção do código.

- Prisma: Foi utilizado o Prisma como ORM (Object-Relational Mapping) para simplificar a interação com o banco de dados PostgreSQL.

- NextAuth.js: O sistema de autenticação foi implementado utilizando o NextAuth.js, com suporte para autenticação via Gmail.

- Bibliotecas Adicionais: A aplicação utiliza diversas bibliotecas, incluindo React Date Picker, date-fns, React Currency Input Field, react-toastify e outras para melhorar a usabilidade e a funcionalidade.


## Integração do Stripe

O Stripe é utilizado para processar pagamentos de forma segura e eficiente. A integração do Stripe permite aos usuários realizar pagamentos por cartão de crédito e débito diretamente pela plataforma. O Stripe é configurado em "modo de teste" durante o desenvolvimento, garantindo que todas as transações sejam simuladas e seguras.

![tripIt-fluxo drawio (2)](https://github.com/brennerpaiva/travel-booking/assets/114958953/f056f97e-8f26-4259-a06d-6a1d402f49b3)



