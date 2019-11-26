function retorna(){
    $.getJSON("https://apisig.ifal.edu.br/v1/login_aluno/ramobarrosk23/128;106;117;103;116;121;58;51;58;", function(data){
    var nomes = [];
    nomes.push(data.id_pessoa);
    nomes.push(data.nome);
    nomes.push(data.social);
    nomes.push(data.email);

    var id_pessoa = nomes[0];
    var nome = nomes[1];
    var nome_social = nomes[2];
    var email = nomes[3];
    
    }
    
)};