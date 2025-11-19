# Protótipo AlexCell

## Tema, Objetivo e Público-Alvo
**Tema:** Loja de Acessórios para Celular (E-commerce).

**Objetivo:** Criar uma plataforma de e-commerce acessível e intuitiva para a AlexCell, permitindo que os clientes da loja física façam compras online com facilidade.

**Público-Alvo:** Todas as idades, com foco especial no público jovem, que busca acessórios modernos, funcionais e com design (capinhas, películas, carregadores, etc.).

## Links do Projeto
* **Acesse o Site (GitHub Pages):** [INSIRA_AQUI_O_LINK_DO_SEU_GITHUB_PAGES]
* **Protótipo (Figma):** [Link do Figma](https://www.figma.com/design/AM3hFSDGQPR5YsCKhPCylh/Prototipo-AlexCell?m=auto&t=JJe4A2IzCWW5t1oA-6)

## Escolha do Negócio e Potencial
**Negócio Escolhido:** AlexCell – Loja de Acessórios para Celular.

**Justificativa e Potencial de Negócio:** O setor de acessórios para celular possui um potencial elevado devido à constante renovação de smartphones. A criação de um e-commerce para a AlexCell permite:
* **Atingir um Mercado Amplo:** Expandir a atuação para além da loja física.
* **Aumentar a Receita:** Gerar vendas 24/7.
* **Fidelização:** Oferecer um canal de comunicação ágil.

## Tecnologias Utilizadas
* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização, Flexbox, Grid e Media Queries.
* **JavaScript (Vanilla):** Manipulação de DOM, Fetch API para componentes e lógica de menu.
* **Git/GitHub:** Controle de versão e hospedagem.

## Estrutura de Pastas
```bash
.
├── index.html         # Página Inicial
├── quem-somos.html    # Institucional
├── ajuda.html         # Central de Ajuda
├── contato.html       # Formulário de Contato
├── carrinho.html      # Carrinho de Compras
├── login.html         # Login/Cadastro
├── rastreamento.html  # Rastreio de Pedidos
├── capinhas.html      # Categoria
├── peliculas.html     # Categoria
├── cabos.html         # Categoria
├── carregadores.html  # Categoria
├── acessorios.html    # Categoria
├── README.md          # Documentação
├── css/
│   ├── style.css      # Estilos Globais e Base Desktop
│   └── responsive.css # Regras de Adaptação Mobile/Tablet
├── componentes/
│   ├── footer.html    # Rodapé Modular
│   ├── nav.html       # Barra de Navegação Modular
│   ├── whatsapp-button.html
│   └── back-to-top.html
├── js/
│   ├── componentes.js # Script para carregar HTML dinâmico
│   └── main.js        # Lógica do Menu e Interações
└── img/
    └── [Logos e Imagens dos Produtos]

    Resumo do Desenvolvimento
Parte 1: Conceito e Estrutura Inicial
Nesta etapa, focamos na definição da identidade visual (Paleta Vermelha #f14c46), criação das páginas principais em HTML e estruturação básica do CSS. Definimos o público-alvo e o fluxo de navegação principal.

Parte 2: Otimização e Responsividade
Realizamos melhorias técnicas significativas para garantir o funcionamento pleno em dispositivos móveis:

Menu de Categorias (Mobile): Implementação de lista deslizante horizontal (scroll lateral) para botões de categoria.

Menu Hambúrguer: Criação de menu lateral (gaveta) com controle de z-index para sobreposição correta.

Grids Inteligentes: Adaptação automática de colunas de produtos (1 no mobile, 2 no tablet, 3+ no desktop).

Tabelas Adaptáveis: Transformação da tabela do carrinho em "cards" no mobile.

Correção de Layout: Implementação de "Sticky Footer" seguro para evitar sobreposição de botões.

Parte 3: Testes e Reflexão
Fase final dedicada à validação do código em diferentes navegadores, documentação dos processos e planejamento de melhorias futuras.

Documentação dos Testes
Navegadores e Dispositivos Testados
Navegadores: Google Chrome, Mozilla Firefox, Microsoft Edge.

Dispositivos: Desktop Widescreen (1920x1080), Notebook (1366x768), Tablet (768px), Mobile (375px e 414px).

Problemas Encontrados e Soluções
Sobreposição do Rodapé: O rodapé cobria botões em telas pequenas. Solução: Adicionado padding-bottom forçado no container principal.

Conflito de Camadas (Menu): Botões de compra ficavam na frente do menu. Solução: Ajuste agressivo de z-index no responsive.css.

Quebra da Tabela do Carrinho: Tabela ilegível no celular. Solução: Alterado display para block transformando linhas em blocos.

Reflexão e Aprendizado
6.1. Reflexão Individual
Gustavo Monteiro:

Aprendizados: Desenvolvi uma compreensão profunda sobre Media Queries e z-index. Melhorei a organização de arquivos CSS.

Desafio: Entender o comportamento do rodapé (Sticky Footer) e como o fluxo do HTML afeta o posicionamento.

Evolução: Domino melhor Flexbox e Grid Layout, sabendo quando aplicar cada um.

Arthur Santos:

Aprendizados: Foco na modularização de código com JavaScript (fetch) para evitar repetição de HTML. Aprendi muito sobre UX Mobile.

Desafio: Lidar com conflitos de sobreposição de elementos e debugging no navegador.

Evolução: Minha capacidade de encontrar e corrigir erros de layout melhorou drasticamente.

6.2. Reflexão da Dupla
Evolução: O projeto saiu de um site estático desktop para um e-commerce responsivo e modular. A abordagem Mobile-First na fase de correção foi essencial. Feedback: Percebemos que a legibilidade no mobile é prioridade. Ajustamos tamanhos de fonte e áreas de clique baseados em testes. Negócio: O site entrega valor real, permitindo que a AlexCell venda 24h por dia com uma interface profissional.

6.3. Plano de Ação Futuro (Próximos Passos)
[ ] Backend: Implementar processamento real de pedidos.

[ ] API de CEP: Integração para cálculo de frete em tempo real.

[ ] Acessibilidade: Melhorar suporte a leitores de tela (ARIA).

[ ] Estudos: Aprofundar em JavaScript Assíncrono e Frameworks (React).

Créditos
Ícones: Icons8 e Flaticon.

Fontes: Arial (Web Safe Fonts).

Imagens de Produto: Imagens ilustrativas retiradas de bancos de imagem gratuitos e fornecedores parceiros.

Logo: Gerado via IA (ChatGPT/DALL-E).

Integrantes:

Gustavo Monteiro - Desenvolvimento Front-end

Arthur Santos - Desenvolvimento Front-end