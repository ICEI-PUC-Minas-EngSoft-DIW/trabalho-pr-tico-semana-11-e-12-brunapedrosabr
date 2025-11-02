// Dados dos Restaurantes (JSON)
const dados = {
  restaurantes: [
    {
      id: 1,
      nome: "Coco Bambu",
      descricao: "Frutos do mar e pratos nordestinos em ambiente elegante.",
      conteudo:
        "O Coco Bambu é conhecido pela variedade de pratos com frutos do mar, porções generosas e ambiente refinado. Ideal para encontros em família ou comemorações especiais. A casa oferece um cardápio variado com opções que vão desde camarões até lagostas, sempre com ingredientes frescos e de alta qualidade.",
      categoria: "Frutos do Mar",
      destaque: true,
      endereco: "Av. Cristiano Machado, 4000 – União, BH",
      telefone: "(31) 3429-2920",
      horario: "Segunda a domingo, 11h às 23h",
      site: "www.cocobambu.com",
      preco_medio: "R$ 120,00 por pessoa",
      imagem_principal: "assets/img/coco_bambu.jpg",
      fotos: [
        {
          id: 1,
          titulo: "Camarão internacional",
          imagem: "assets/img/camarao_internacional.png",
        },
        {
          id: 2,
          titulo: "Lagosta grelhada",
          imagem: "assets/img/lagosta_grelhada.png",
        },
        {
          id: 3,
          titulo: "Ambiente interno",
          imagem: "assets/img/ambiente_coco_bambu.png",
        },
      ],
    },
    {
      id: 2,
      nome: "L'Entrecôte de Paris",
      descricao: "Experiência francesa com prato único e molho secreto.",
      conteudo:
        "O L'Entrecôte de Paris oferece uma experiência gastronômica francesa única. O conceito é simples: você não escolhe o prato, todos recebem a famosa entrecôte grelhada acompanhada de batatas fritas crocantes e o molho secreto da casa. A sobremesa vem incluída no menu fixo.",
      categoria: "Francesa",
      destaque: true,
      endereco: "Rua Marília de Dirceu, 226 – Lourdes, BH",
      telefone: "(31) 3292-5523",
      horario: "Terça a domingo, 12h às 15h e 19h às 23h",
      site: "www.lentrecotedeparis.com.br",
      preco_medio: "R$ 95,00 por pessoa",
      imagem_principal: "assets/img/lentrecote.jpg",
      fotos: [
        {
          id: 1,
          titulo: "Entrecôte com molho secreto",
          imagem: "assets/img/steak_carne.png",
        },
        {
          id: 2,
          titulo: "Sobremesas francesas",
          imagem: "assets/img/sobremesa_francesa.png",
        },
        {
          id: 3,
          titulo: "Decoração parisiense",
          imagem: "assets/img/ambiente_lentrecote.png",
        },
      ],
    },
    {
      id: 3,
      nome: "Xapuri",
      descricao: "Referência em comida mineira tradicional no fogão à lenha.",
      conteudo:
        "O Xapuri é um dos restaurantes mais tradicionais de Belo Horizonte. Localizado na Pampulha, oferece autêntica comida mineira preparada no fogão à lenha. O ambiente rústico e acolhedor, rodeado por natureza, proporciona uma experiência completa da cultura mineira.",
      categoria: "Mineira",
      destaque: true,
      endereco: "Av. Deputado Anuar Menhem, 1179 – Pampulha, BH",
      telefone: "(31) 3496-6198",
      horario: "Terça a domingo, 11h30 às 17h",
      site: "www.xapurirestaurante.com.br",
      preco_medio: "R$ 80,00 por pessoa",
      imagem_principal: "assets/img/xapuri.jpg",
      fotos: [
        {
          id: 1,
          titulo: "Moranga recheada com carne seca",
          imagem: "assets/img/moranga.png",
        },
        {
          id: 2,
          titulo: "Fogão à lenha",
          imagem: "assets/img/fogao_a_lenha.png",
        },
        {
          id: 3,
          titulo: "Área externa",
          imagem: "assets/img/area_externa_xapuri.png",
        },
      ],
    },
    {
      id: 4,
      nome: "Taste Vin",
      descricao: "Bistrô sofisticado com wine bar e harmonizações especiais.",
      conteudo:
        "O Taste Vin é um bistrô elegante que combina alta gastronomia com uma excelente carta de vinhos. O ambiente intimista é perfeito para jantares românticos ou reuniões de negócios. O menu degustação com harmonização é o carro-chefe da casa.",
      categoria: "Contemporânea",
      destaque: false,
      endereco: "Rua Curitiba, 2105 – Lourdes, BH",
      telefone: "(31) 3335-6741",
      horario: "Segunda a sábado, 12h às 15h e 19h às 23h",
      site: "www.tastevinbh.com.br",
      preco_medio: "R$ 180,00 por pessoa",
      imagem_principal: "assets/img/frango_taste_vin.jpg",
      fotos: [
        {
          id: 1,
          titulo: "Soufflé",
          imagem: "assets/img/sufle.jpg",
        },
        {
          id: 2,
          titulo: "Adega de vinhos",
          imagem: "assets/img/adega_vinhos.jpg",
        },
        {
          id: 3,
          titulo: "Área externa",
          imagem: "assets/img/area_externa_taste_vin.jpg",
        },
      ],
    },
    {
      id: 5,
      nome: "Nimbos Bar",
      descricao:
        "Bar urbano com coquetelaria criativa, hamburgueria artesanal e ambiente descontraído.",
      conteudo:
        "O Nimbos Bar é um dos pontos mais descolados da Savassi, em Belo Horizonte. Com uma proposta que mistura bar de calçada e hamburgueria, oferece coquetéis autorais, cervejas artesanais e porções criativas. O ambiente tem estilo industrial com pegada urbana, ideal para encontros entre amigos e noites animadas. Música ao vivo e DJs são comuns nas quintas e sextas.",
      categoria: "Hamburgueria",
      destaque: false,
      endereco: "R. Sergipe, 629 - Savassi, Belo Horizonte - MG, 30130-171",
      telefone: "(31) 3657-4149",
      horario: "Terça a sábado, das 18h às 02h",
      site: "https://www.instagram.com/nimbosbar",
      preco_medio: "R$ 60,00 por pessoa",
      imagem_principal: "assets/img/hamburguer.png",
      fotos: [
        {
          id: 1,
          titulo: "Coquetéis autorais",
          imagem: "assets/img/drinks_nimbos.jpeg",
        },
        {
          id: 2,
          titulo: "Ambiente urbano",
          imagem: "assets/img/ambiente_nimbos.jpeg",
        },
        {
          id: 3,
          titulo: "Porções criativas",
          imagem: "assets/img/nimbos.jpg",
        },
      ],
    },
    {
      id: 6,
      nome: "Pizzaria Olegário",
      descricao: "Pizzas premiadas com massa artesanal e forno a lenha.",
      conteudo:
        "A Pizzaria Olegário é referência em Belo Horizonte pela qualidade e tradição. Suas pizzas são preparadas com massa de fermentação natural e assadas em forno a lenha, garantindo sabor e textura únicos. O cardápio inclui clássicos napolitanos e criações autorais, além de pratos à la carte e uma carta de vinhos selecionada. O ambiente sofisticado e o atendimento impecável tornam a experiência memorável.",
      categoria: "Pizzaria",
      destaque: false,
      endereco:
        "Av. Olegário Maciel, 1748 - Lourdes, Belo Horizonte - MG, 30180-111",
      telefone: "(31) 3337-4446",
      horario:
        "Segunda a sexta, 12h às 15h e 18h às 23h; sábado e domingo, 12h às 16h e 18h às 23h",
      site: "https://www.redegourmet.com.br/marca/olegario",
      preco_medio: "R$ 70,00 por pessoa",
      imagem_principal: "assets/img/pizzas.jpg",
      fotos: [
        {
          id: 1,
          titulo: "Pizza artesanal",
          imagem: "assets/img/pizza.jpg",
        },
        {
          id: 2,
          titulo: "Forno a lenha",
          imagem: "assets/img/forno_pizzaria.jpg",
        },
        {
          id: 3,
          titulo: "Ambiente sofisticado",
          imagem: "assets/img/ambiente_pizzaria.png",
        },
      ],
    },
  ],
};

// Função para criar o carrossel
function montarCarrossel() {
  const destaques = dados.restaurantes.filter((r) => r.destaque);
  const indicadores = document.getElementById("indicadores-carrossel");
  const conteudo = document.getElementById("conteudo-carrossel");

  if (!indicadores || !conteudo) return;

  destaques.forEach((restaurante, index) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.setAttribute("data-bs-target", "#carrosselPrincipal");
    botao.setAttribute("data-bs-slide-to", index);
    if (index === 0) {
      botao.classList.add("active");
      botao.setAttribute("aria-current", "true");
    }
    indicadores.appendChild(botao);

    // Cria slide do carrossel
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (index === 0) item.classList.add("active");

    item.innerHTML = `
      <img src="${restaurante.imagem_principal}" alt="${restaurante.nome}">
      <div class="carousel-caption">
        <h5>${restaurante.nome}</h5>
        <p>${restaurante.descricao}</p>
        <a href="detalhe.html?id=${restaurante.id}" class="btn">Saiba mais</a>
      </div>
    `;

    conteudo.appendChild(item);
  });
}

// Função para criar os cards dos restaurantes
function montarCards() {
  const container = document.getElementById("container-cards");

  if (!container) return;

  dados.restaurantes.forEach((restaurante) => {
    const coluna = document.createElement("div");
    coluna.classList.add("col-md-4", "col-sm-6", "mb-4");

    coluna.innerHTML = `
      <div class="card">
        <img src="${restaurante.imagem_principal}" class="card-img-top" alt="${restaurante.nome}">
        <div class="card-body">
          <span class="badge">${restaurante.categoria}</span>
          <h5 class="card-title">${restaurante.nome}</h5>
          <p class="card-text">${restaurante.descricao}</p>
          <a href="detalhe.html?id=${restaurante.id}" class="btn btn-detalhes">Ver detalhes</a>
        </div>
      </div>
    `;

    container.appendChild(coluna);
  });
}

// Função para obter o ID do item
function obterIdDaURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parseInt(parametros.get("id"));
}

// Função para mostrar detalhes do restaurante
function mostrarDetalhes() {
  const id = obterIdDaURL();
  const restaurante = dados.restaurantes.find((r) => r.id === id);

  if (!restaurante) {
    window.location.href = "index.html";
    return;
  }

  const container = document.getElementById("container-detalhes");

  if (!container) return;

  // Fotos adicionais dos restaurantes
  let fotosHTML = "";
  restaurante.fotos.forEach((foto) => {
    fotosHTML += `
      <div class="col-md-4 col-sm-6">
        <div class="card card-foto">
          <img src="${foto.imagem}" class="card-img-top" alt="${foto.titulo}">
          <div class="card-body">
            <p class="card-text">${foto.titulo}</p>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <section class="secao-detalhes">
      <div class="container">
        <a href="index.html" class="btn btn-voltar">
          <i class="bi bi-arrow-left"></i> Voltar para Home
        </a>
        
        <!-- Informações Gerais -->
        <div class="info-detalhes">
          <div class="row">
            <div class="col-md-6">
              <img src="${restaurante.imagem_principal}" class="imagem-principal" alt="${restaurante.nome}">
            </div>
            <div class="col-md-6">
              <span class="badge">${restaurante.categoria}</span>
              <h1>${restaurante.nome}</h1>
              <p><strong>Descrição:</strong> ${restaurante.descricao}</p>
              <p>${restaurante.conteudo}</p>
              <hr>
              <p><strong><i class="bi bi-geo-alt-fill"></i> Endereço:</strong> ${restaurante.endereco}</p>
              <p><strong><i class="bi bi-telephone-fill"></i> Telefone:</strong> ${restaurante.telefone}</p>
              <p><strong><i class="bi bi-clock-fill"></i> Horário:</strong> ${restaurante.horario}</p>
              <p><strong><i class="bi bi-globe"></i> Site:</strong> ${restaurante.site}</p>
              <p><strong><i class="bi bi-cash"></i> Preço Médio:</strong> ${restaurante.preco_medio}</p>
            </div>
          </div>
        </div>

        <!-- Fotos Vinculadas -->
        <div class="secao-fotos">
          <h2>Fotos do Restaurante</h2>
          <div class="row">
            ${fotosHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  const paginaAtual = window.location.pathname;

  if (paginaAtual.includes("index.html") || paginaAtual.endsWith("/")) {
    montarCarrossel();
    montarCards();
  }

  if (paginaAtual.includes("detalhe.html")) {
    mostrarDetalhes();
  }
});
