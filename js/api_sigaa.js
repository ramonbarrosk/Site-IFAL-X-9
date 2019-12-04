function mostraInfo(nome,senha){
    
    $.getJSON("https://apisig.ifal.edu.br/v1/login_aluno/"+nome+"/"+senha, function(data){
    var nomes = [];
    nomes.push(data.id_pessoa);
    nomes.push(data.nome);
    nomes.push(data.social);
    nomes.push(data.email);

    var id_pessoa = nomes[0];
    var nome = nomes[1];
    var nome_social = nomes[2];
    var email = nomes[3];

    console.log(id_pessoa);
    
    }
    
)};



function validaUser(nome,senha){
    
    $.getJSON("https://apisig.ifal.edu.br/v1/login_aluno/"+nome+"/"+senha, function(data){
  

    if (data.error == "Usu\u00e1rio e\/ou senha inv\u00e1lidos"){
        console.log("Usuário inválido!")
      
         
        Swal.fire({
            icon: 'error',
            title: 'Usuário inválido!',
           
            footer: '<a href>Você está cadastrado no SIGAA?</a>'
          })
    }else{
        console.log("Usuário válido!")
        console.log(data);
        $('#usuario').html(nome);
         window.location="menu.html";
    }
    
    }
    
)};


    





