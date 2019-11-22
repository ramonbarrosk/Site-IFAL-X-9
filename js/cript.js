
		function cript(){
            var nome = "";
            nome = document.getElementById("nome").value;
            
			var senha = "";
			senha = document.getElementById("pass").value;
				//A senha 12345 retorna 58;51;58;55;58;56;
				class Login {
					constructor() {
						this.cypher = '917352';
						this.username = '';
						this.password = '';
					}
					encryptData(data) {
						let result = '';
						let cypherPos = 0;
						if (data !== null) {
							for (let i = 0; i < data.length; i++) {
								cypherPos = i % this.cypher.length;
								result += data.charCodeAt(i) + parseInt(this.cypher[cypherPos]) + ';';
							}
						}
						return result;
					}
				}
				
				var login = new Login();
				console.log(senha);
                var senha_cript = login.encryptData(senha);
                $('#myass').append(senha_cript);
                $('menu').append("Bem vindo"+nome);
				

		}
