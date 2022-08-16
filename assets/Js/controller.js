function logar(){

    let nome = document.getElementById("user")

    let senha = document.getElementById("senha")

    if(nome == null || nome == " "){

        alert("Digite um nome de usuário válido!")
        
    }else if(senha ==null|| senha ==" "){

        alert("Digite uma senha válida!")

    }else{
        alert("Certo")
    }


}