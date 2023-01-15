#! /bin/bash

# Este arquivo é responsavel pela instalação em LINUX dos pacotes de NPM necessários para execução da aplicação.
# É necessário o uso do Node 16. É possivel que versões mais recentes funcionem adequadamente contudo não são recomendaveis.

nm-online

echo ">> É necessário o NodeJS 16 "
echo ">> Sua versão do NodeJS é:" && node -v

# while true; do

read -p "Você deseja proceder? (S/n) " yn

case $yn in 
	[sS] ) echo >> A instalação dos Pacotes NPM iniciará em 5 segundos;
		break;;
	[nN] ) echo cancelando...;
		exit;;
	* ) echo resposta inválida(pressione S para confirmar ou N para cancelar);;
esac



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
# npm install

echo "A instalação foi concluida com sucesso."

done
sleep 3s
exit
