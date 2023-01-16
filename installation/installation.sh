#! /bin/bash

# Este arquivo é responsavel pela instalação em LINUX dos pacotes de NPM necessários para execução da aplicação.
# É necessário o uso do Node 16. É possivel que versões mais recentes funcionem adequadamente contudo não são recomendaveis.

echo ">> É necessário o NodeJS 16 "
echo ">> Sua versão do NodeJS é:" && node -v

read -p ">> Você deseja proceder? (S/N) " escolha

case $escolha in 
	[sS] ) echo ">> A instalação dos Pacotes NPM iniciará em 5 segundos";
	echo " "
    sleep 1s
    echo "   ."
    sleep 1s
    echo "   .."
    sleep 1s
    echo "   ..."
    sleep 1s
    echo "   ...."
    sleep 1s
    echo "   ....."
    echo " "
    
    echo "fui executado :3"
    # npm install -y
    
    echo "A instalação foi concluida com sucesso."
    
    sleep 3s
    exit;;

	[nN] ) echo ">> cancelando...";
	sleep 3s
	exit;;
	
	* ) echo "resposta inválida(pressione S para confirmar ou N para cancelar)";;
esac
