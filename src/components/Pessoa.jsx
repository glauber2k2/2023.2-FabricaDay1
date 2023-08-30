//Componente Pessoa.

export default function Pessoa({nome}) { 
    
    //Basicamente, dentro da função Pessoa, podemos receber a propriedade name, que temos q colocar entre { } para conseguimos passar algum valor la no page, para ser executado no componente filho que no caso é o Pessoa.

    return <div className="bg-zinc-500 p-4 rounded font-bold">Nome: {nome}</div> 
} 

//para usarmos o nome passado no componente lá na pagina principal, temos que colocar dentro do nossa renderização, dentro do return o nome da propriedade entre { }

//so podemos retornar 1 elemento dentro do return, ou seja, o aconselhavel é retornar uma div ou um fragment <> </>, e colocar tudo dentro desse retorno principal seja div ou fragment.