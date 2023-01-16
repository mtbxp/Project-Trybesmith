@REM Este arquivo é responsavel pela instalação em WINDOWS dos pacotes de NPM necessários para execução da aplicação.
@REM É necessário o uso do Node 16. É possivel que versões mais recentes funcionem adequadamente contudo não são recomendaveis.

echo ">> É necessário o NodeJS 16 "
echo ">> Sua versão do NodeJS é:" && node -v

:choice
set /P c=Você deseja proceder [S/N]?
if /I "%c%" EQU "S" goto :proceder
if /I "%c%" EQU "N" goto :cancelar
goto :choice

:proceder

echo ">> A instalação dos Pacotes NPM iniciará em 5 segundos";
	echo " "
    timeout 1 > NUL
    echo "   ."
    timeout 1 > NUL
    echo "   .."
    timeout 1 > NUL
    echo "   ..."
    timeout 1 > NUL
    echo "   ...."
    timeout 1 > NUL
    echo "   ....."
    echo " "
    
    echo "fui executado :3"
    @REM npm install -y
    
    echo "A instalação foi concluida com sucesso."
    
    timeout 3 > NUL
    exit

:cancelar

echo ">> cancelando..."
timeout 3 > NUL
exit
