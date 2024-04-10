nome = input("Digite o seu nome")
email = input("Digite o seu email")


if nome and email: 
    pos_a = email.find("@")
    servidor = email[pos_a:]
    if pos_a != -1 and "." in servidor:
        print("Cadastro concluido")
    else:
        print("DIgite o seu nome e email corretamente ")
else: 
    print("DIgite o seu nome e email corretamente ")