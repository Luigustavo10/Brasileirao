function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um clube</p>";
        return;
    }

    let resultados = "";
    for (let clube of dados) {
        if (clube.titulo.toLowerCase().includes(campoPesquisa) || 
        clube.tags.some(tag => tag.toLowerCase().includes(campoPesquisa))) {
            document.body.style.backgroundColor = clube.cores;
            resultados = `
                <div class="item-resultado">
                    <h2>${clube.titulo}</h2>
                    <img src="${clube.escudo}" alt="Escudo do ${clube.titulo}" width="100" height="100">
                    <p class="descricao-meta">${clube.descricao}</p>
                    <p>Classificação no brasileirão: ${clube.classificacao}° Lugar</p>
                    <p>Títulos Brasileiros: ${clube.titulosBrasileiros}</p>
                    <p>Títulos da Libertadores: ${clube.libertadores}</p>
                    <p>Títulos Mundiais: ${clube.mundiais}</p>
                </div>
            `;
            break;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
};
