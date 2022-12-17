class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos =[];
    }

    Cadastrar(){
        let produto = this.lerDados()
        
        if (this.Validar(produto) == true){
            this.Salvar(produto);
            /*essa condição IF acima salva os dados*/
        }
        this.Listar()
                
    }

    lerDados(){
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdNome').value
        produto.precoProduto = document.getElementById('pdQTDE').value
        produto.classeProduto = document.getElementById('pdClasse').value

        return produto;

    }

    Validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto! \n';

        }
        if(produto.precoProduto == ''){
            msg += 'Por favor, insira corretamente o preço do produto! \n';
        }
        if(produto.classeProduto == ''){
            msg += 'Por favor, insira corretamente a classe do produto! \n';
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

    Salvar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    Listar(){
        let tbody = document.getElementById('tBody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_classe = tr.insertCell();
            let td_deletar = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            td_classe.innerText = this.arrayProdutos[i].classeProduto;
            let imagem = document.createElement('img')
            imagem.src = 'lixeira.png.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_deletar.appendChild(imagem)
        }
    }

  

    Deletar(id){
        let tbody = document.getElementById('tBody')
        for (let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1) /*para deletar um item de um indice*/
                tbody.deleteRow(i)
            }
        }
        alert('O item foi apagado com sucesso.')
    }
}

var produto = new Produto();