var codigo = document.querySelectorAll('.codigo');

codigo[0].focus();

for(let posicao = 0; posicao < codigo.length; posicao++){
    var codVerificacao = codigo[posicao];

    codVerificacao.addEventListener("keydown", function(e){

        if (e.key >= 0 && e.key <= 9){
            codigo[posicao].value = '';
            setTimeout(()=> codigo[posicao + 1].focus(), 10);
        }else if (e.key === 'Backspace'){
            setTimeout(() => codigo[posicao - 1].focus(), 10);
        }

        var todosPreenchidos = true;
        for (let i = 0; i < codigo.length; i++) {
            if (!codigo[i].value) {
                todosPreenchidos = false;
                break;
            }
        }
        
        if (todosPreenchidos) {
            reg();
        }
    });
}

function reg(){
    Swal.fire({
        title: "Bom Trabalho!!!",
        text: "Confirmação feita com sucesso",
        icon: "success"
      });
}