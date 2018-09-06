// Primeiro pegue o elemento <table>
// que ja esta la no HTML.
const table = document.querySelector("table")

// Depois defina um tamanho para
// a nossa tabela. Tamanho significa
// numero de celulas e colunas.
const size = 8

// Inicial uma lista que ira conter
// todos os <td>s da pagina organizados
// como eles estao arganizados na pagina.
let matrix = []
// Entao crie um loop que vai rodar por todas
// as celulas da tabela. Ele tera um loop dentro
// do outro, o loop externo sera pelas linhas
// e o interno pelas celulas de cada linha.
for (let i = 0; i < size; i++) {
	// Crie um novo elemento <tr> que ira
	// receber todos os <td>
	const row = document.createElement("tr")
	// Crie uma nova lista para colocar na 
	// nova `matrix`.
	let cell_list = []
	for (let j = 0; j < size; j++) {
		// Crie um novo elemento <td>.
		const cell = document.createElement("td")
		// Coloque esse elemento dentro la <tr>
		// que criamos no loop externo.
		row.appendChild(cell)
		// Coloque o novo <td> criado dentro
		// da nossa `matrix`.
		cell_list.push(cell)
	}
	// Coloque o <tr> recem populado, dentro
	// da nossa <table>.
	table.appendChild(row)
	// Coloca a nova linha dentro da nossa `matrix`.
	matrix.push(cell_list)
}

const = ["lavender", "purple", "pink", "black", "brown",]

for (const row of matrix) {
	for (const cell of row) {
		// Para cada celula na tabela,
		// escute pelo envento de clique.
		cell.addEventListener("click", event => {
			cell.classList.add("painted")
		


			
		})
	}
}
