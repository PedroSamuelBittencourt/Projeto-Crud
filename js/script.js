var clientes= []

//guarda o objeto que esta sendo alterado
var clienteAlterado = null

function adicionar(){
    document.getElementById("cpf").disabled = false
    clienteAlterado = null
    mostrarModal()
    limparform()
}
function alterar(cpf){
    //procurar o cliente que tem o CPF clicado no alterar
    for(let i = 0; i<clientes.length; i++){
        let cliente = clientes[i]
        if(cliente.cpf == cpf){
            //achou o cliente, então preenche o form
            document.getElementById("nome").value = cliente.nome
            document.getElementById("cpf").value = cliente.cpf
            document.getElementById("tel").value = cliente.telefone
            document.getElementById("idade").value = cliente.idade
            document.getElementById("genero").value = cliente.genero
            clienteAlterado = cliente
        }
    }
    //bloquear o cpf para nao permitir alterá-lo
    document.getElementById("cpf").disabled = true
    mostrarModal()
}

function excluir(){
    
}
function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
    // style.display = flex edita o css pelo JS
}
function ocultarModal (){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}
function cancelar(){
    ocultarModal()
    limparform()
}
// divisao de responsabilidade (Cada função serve para algo)
// refatoração de código()
function excluir(cpf){
    if(confirm("Voce deseja realmente excluir?")){
        for(let i = 0; i<clientes.length; i++){
            let cliente = clientes[i]
            if(cliente.cpf == cpf){
                //remove o elemento encontrado na posição "i"
                clientes.splice(i,1)
            }
        }
        exibirDados()
    }
    
}
function salvar() {
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById("tel").value
    let idade = document.getElementById("idade").value
    let genero = document.getElementById("genero").value
    
    //se não tiver alterando ninguém, add vetor
    if(clienteAlterado==null){
            let cliente= {
                "nome": nome,
                "cpf": cpf,
                "telefone": telefone,
                "idade": idade,
                "genero": genero
            }
            //add o objeto cliente no vetor de clientes
            clientes.push(cliente)
        }else{
            clienteAlterado.nome = nome
            clienteAlterado.cpf = cpf
            clienteAlterado.telefone = telefone
            clienteAlterado.idade = idade
            clienteAlterado.genero = genero
        }

        clienteAlterado = null
    //limpa o form
    limparform()
    exibirDados()
    ocultarModal()
}
function exibirDados() {

    //antes de listar os clientes, limpa todas as linhas
  
    let tbody = document.querySelector("#table-customers tbody")

    tbody.innerHTML=""
    for (let i = 0; i < clientes.length; i++) {
        let linha= `
                <tr>
                <td class= 'informacoes'>${clientes[i].nome}</td>
                <td class= 'informacoes'>${clientes[i].cpf}</td>
                <td class= 'informacoes'>${clientes[i].telefone}</td>
                <td class= 'informacoes'>${clientes[i].idade}</td>
                <td class= 'informacoes'>${clientes[i].genero}</td>
                <td>
                    <button onclick="alterar('${clientes[i].cpf}')" id='botao-alterar'> <i class='fa-solid fa-pen' ></i>Alterar</button>
                    <button onclick="excluir('${clientes[i].cpf}')"class='botao-excluir'><i class='fa-solid fa-trash'></i>Excluir</button>
                </td>
                </tr>
                 `
        let tr = document.createElement("tr")
        tr.innerHTML = linha

        tbody.appendChild(tr)
}
}
function limparform(){
    document.getElementById("nome").value = ""  
    document.getElementById("cpf").value = ""   
    document.getElementById("tel").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("genero").value = ""
}

// sites uteis para JS
// w3schools