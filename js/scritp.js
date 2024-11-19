
/*PROCEDIMENTO
descrição:exibe uma mensagem fixa
nome:mostraAlerta 
parametro:void
retorno: void
void -> significa que nao retorna valor ou seja "vazio"
*/
 
function mostraAlerta()
{
    alert("Não é que isso funciona mesmo !!");

}

/*PROCEDIMENTO
de
    alert("Não é que isso funciona mesmo !!"+msg);
scrição:exibe uma mensagem fixa
nome:mostraAlerta 
parametro:void
retorno: void
void -> significa que nao retorna valor ou seja "vazio"
*/

function mostraAlerta1(msg)
{
    alert("boa noite, "+msg);
}

function mensagem_com_parametro_return(msg1)
{
    return("voce digitou:"+msg1)

}


/*
FUNÇÃO----------------
NOME:copiar_texto_maisculo
PARAMETRO: string
RETORNO:n string
*/

function copiar_texto_maisculo(msg)
{
    return (msg.toUpperCase());
}
