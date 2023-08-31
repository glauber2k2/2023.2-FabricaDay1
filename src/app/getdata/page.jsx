'use client'

//importação dos Hooks: useState e UseEffect
import { useState, useEffect } from "react";

//Inicio da função que cria a pagina getdata
export default function GetData() {
const [data, setData] = useState([]); //declaração do estado que vai armazenar os dados da api, iniciando como valor padrão de um array vazio [ ].

//useEffect é um hook que executa algo, a cada atualização de algo.
 useEffect(() => {

    //vamos utlizar o fetch para fazer a requisição dos dados na api.
    //passamos o endereço da api, no nosso fetch()
    fetch(`https://jsonplaceholder.typicode.com/users`, { 

    //definimos o metodo da requisição que será get, pois queremos apenas trazer os dados.
      method: 'GET',

      //definimos o cabeçalho da requsição
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json()) //pegamos a resposta vinda da api, e transformamos para o formato json, usando o resp.json()
      .then((data) => {
        setData(data); //agora pegamos os dados, e colocamos na nossa variavel de estado data, utilizando o setData(), para podermos acessar em qualquer local da pagina.
      })
      .catch((err) => console.log(err)); //aqui é onde pegamos os erros, caso existam, e podemos tratar, no caso aqui estamos dando apenas um console log para poder ver o erro no console
      
  }, []); /*aqui no [] é onde selecionamos, qual elemento deve ser observado a atualização, para q o useEffect seja executado, quando deixamos vazio, ele executa todas as vezes que abrimos a pagina uma unica vez. */
  
 

return <div className="grid grid-cols-4 gap-6 p-10">
    {data.map((user) => (
        <div key={user.id} className="bg-zinc-800 flex flex-col p-4 text-zinc-300 rounded-lg">
            <h1 className="font-bold text-xl">{user.name}</h1>
            <p className="text-sm lowercase text-zinc-400">@{user.username}</p>

            <p className="font-medium mt-4">Email: {user.email}</p>
            <p className="font-medium mt-1">Numero: {user.phone}</p>
            <p className="font-medium mt-1">Site: {user.website}</p>
        </div>
    ))} 
    
</div>
/* 
    1. Aqui estamos utilizando a função map, que é para percorrer todo o nosso array que está armazenado no estado data, e a cada objeto dentro desse array, estamos renderizando algo.

    variavel.map((nome) => (

        <div key={dado para usarmos como chave unica}>

        _Dados a serem renderizados._

        </div>

        ))

    2. Para acessar nossos dados que vem da api, temos acessar dentro de { } e colocar o valor que queremos acessar, por exemplo:

        - Se a variavel onde está armazenada se chamar user, ao colocarmos {user} ele ira trazer tudo que estiver dentro de user.

        - Caso User seja um objeto e você queira apenas resgatar algum valor dentro de user, você terá que dizer qual o valor com um ponto . após o nome do ojeto, por exemplo: {user.name}

    3. No className do elemento vamos passar todas as regras de estilizição, exemplo:
        className="bg-zinc-800 flex flex-col p-4 text-zinc-300 rounded-lg"
*/
}