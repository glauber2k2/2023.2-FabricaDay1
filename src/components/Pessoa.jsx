//Componente Pessoa.

export default function Pessoa({nome}) { 
    
    //Basicamente, dentro da função Pessoa, podemos receber a propriedade name, que temos q colocar entre { } para conseguimos passar algum valor la no page, para ser executado no componente filho que no caso é o Pessoa.

    return <div className="bg-zinc-500 p-4 rounded font-bold">Nome: {nome}</div> 
} 

//para usarmos o nome passado no componente lá na pagina principal, temos que colocar dentro do nossa renderização, dentro do return o nome da propriedade entre { }

//so podemos retornar 1 elemento dentro do return, ou seja, o aconselhavel é retornar uma div ou um fragment <> </>, e colocar tudo dentro desse retorno principal seja div ou fragment.

//dentro do elemento jsx que são os elementos do html, como div, h1, h2, e etc... podemos colocar a estilização do elemento, através do tailwind que vem por padrão no next.

//para adicionarmos a estilização temos que colocar dentro do elemento, um className="", e dentro das aspas iremos colocar toda nossa regra de estilização.

//os elementos tem o nome bastante parecidos com o do css convencional, sendo que abreviados, para facilitar recomendo que instale o tailwind intellisense, que ao apertar ctrl + space, ele vai ta sugerindo o nome.

//ou pode olhar também na documentação do tailwind: https://tailwindcss.com/