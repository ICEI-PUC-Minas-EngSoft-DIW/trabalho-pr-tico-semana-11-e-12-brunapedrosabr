const API_URL = "http://localhost:3000/restaurantes";

// GET restaurantes
async function buscarRestaurantes() {
  try {
    const response = await fetch(API_URL);
    const restaurantes = await response.json();
    return restaurantes;
  } catch (error) {
    console.error("Erro ao buscar restaurantes:", error);
    return [];
  }
}

// GET restaurante específico
async function buscarRestaurantePorId(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const restaurante = await response.json();
    return restaurante;
  } catch (error) {
    console.error("Erro ao buscar restaurante:", error);
    return null;
  }
}

// POST novo restaurante
async function criarRestaurante(restaurante) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurante),
    });
    const novoRestaurante = await response.json();
    return novoRestaurante;
  } catch (error) {
    console.error("Erro ao criar restaurante:", error);
    return null;
  }
}

// PUT restaurante existente
async function atualizarRestaurante(id, restaurante) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurante),
    });
    const restauranteAtualizado = await response.json();
    return restauranteAtualizado;
  } catch (error) {
    console.error("Erro ao atualizar restaurante:", error);
    return null;
  }
}

// DELETE restaurante
async function deletarRestaurante(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("Erro ao deletar restaurante:", error);
    return false;
  }
}

// Função para carrossel
async function montarCarrossel() {
  const restaurantes = await buscarRestaurantes();
  const destaques = restaurantes.filter((r) => r.destaque);
  const indicadores = document.getElementById("indicadores-carrossel");
  const conteudo = document.getElementById("conteudo-carrossel");

  if (!indicadores || !conteudo) return;

  indicadores.innerHTML = "";
  conteudo.innerHTML = "";

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

// Função para montar os cards dos restaurantes
async function montarCards() {
  const restaurantes = await buscarRestaurantes();
  const container = document.getElementById("container-cards");

  if (!container) return;

  container.innerHTML = "";

  restaurantes.forEach((restaurante) => {
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

// ID da URL
function obterIdDaURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parseInt(parametros.get("id"));
}

// Função para mostrar os detalhes do restaurante
async function mostrarDetalhes() {
  const id = obterIdDaURL();
  const restaurante = await buscarRestaurantePorId(id);

  if (!restaurante) {
    alert("Restaurante não encontrado!");
    window.location.href = "index.html";
    return;
  }

  const container = document.getElementById("container-detalhes");

  if (!container) return;

  // Galeria com as fotos
  let fotosHTML = "";
  if (restaurante.fotos && restaurante.fotos.length > 0) {
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
  }

  container.innerHTML = `
    <section class="secao-detalhes">
      <div class="container">
        <a href="index.html" class="btn btn-voltar">
          <i class="bi bi-arrow-left"></i> Voltar para Home
        </a>
        
        <!-- Botões de ação CRUD -->
        <div class="acoes-crud mb-3">
          <button class="btn btn-warning" onclick="editarRestaurante(${restaurante.id})">
            <i class="bi bi-pencil"></i> Editar
          </button>
          <button class="btn btn-danger" onclick="confirmarDelecao(${restaurante.id})">
            <i class="bi bi-trash"></i> Deletar
          </button>
        </div>
        
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

// Deletar restaurante selecionado
async function confirmarDelecao(id) {
  if (confirm("Tem certeza que deseja deletar este restaurante?")) {
    const sucesso = await deletarRestaurante(id);
    if (sucesso) {
      alert("Restaurante deletado com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("Erro ao deletar restaurante.");
    }
  }
}

// Redirecionamento para edição
function editarRestaurante(id) {
  window.location.href = `formulario.html?id=${id}`;
}

// Função para preencher o formulário
async function preencherFormulario() {
  const id = obterIdDaURL();

  if (id) {
    document.getElementById("titulo-formulario").textContent =
      "Editar Restaurante";
    const restaurante = await buscarRestaurantePorId(id);

    if (restaurante) {
      document.getElementById("nome").value = restaurante.nome;
      document.getElementById("descricao").value = restaurante.descricao;
      document.getElementById("conteudo").value = restaurante.conteudo;
      document.getElementById("categoria").value = restaurante.categoria;
      document.getElementById("destaque").checked = restaurante.destaque;
      document.getElementById("endereco").value = restaurante.endereco;
      document.getElementById("telefone").value = restaurante.telefone;
      document.getElementById("horario").value = restaurante.horario;
      document.getElementById("site").value = restaurante.site;
      document.getElementById("preco_medio").value = restaurante.preco_medio;
      document.getElementById("imagem_principal").value =
        restaurante.imagem_principal;
    }
  }
}

// Salvar restaurante
async function salvarRestaurante(event) {
  event.preventDefault();

  const id = obterIdDaURL();

  const restaurante = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,
    conteudo: document.getElementById("conteudo").value,
    categoria: document.getElementById("categoria").value,
    destaque: document.getElementById("destaque").checked,
    endereco: document.getElementById("endereco").value,
    telefone: document.getElementById("telefone").value,
    horario: document.getElementById("horario").value,
    site: document.getElementById("site").value,
    preco_medio: document.getElementById("preco_medio").value,
    imagem_principal: document.getElementById("imagem_principal").value,
    fotos: [
      {
        id: 1,
        titulo: "Foto 1",
        imagem: document.getElementById("imagem_principal").value,
      },
    ],
  };

  let resultado;

  if (id) {
    // atualizar
    resultado = await atualizarRestaurante(id, restaurante);
    if (resultado) {
      alert("Restaurante atualizado com sucesso!");
      window.location.href = `detalhe.html?id=${id}`;
    }
  } else {
    // criar
    resultado = await criarRestaurante(restaurante);
    if (resultado) {
      alert("Restaurante criado com sucesso!");
      window.location.href = "index.html";
    }
  }

  if (!resultado) {
    alert("Erro ao salvar restaurante.");
  }
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
  if (paginaAtual.includes("formulario.html")) {
    preencherFormulario();
    document
      .getElementById("form-restaurante")
      .addEventListener("submit", salvarRestaurante);
  }
});
