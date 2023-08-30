'use client' //use client é obrigatorio quando for ter dados dinamicos na pagina.

import { useState } from 'react' //Importação do Hook useState do React.
import Pessoa from '@/components/Pessoa' //importação do componente Pessoa da pasta components.

export default function Home() {
  const [verify, setVerify] = useState(true)
  //para declarar um estado, que são como variaveis dinamicas no react, utilizamos o formato acima.

  //dentro do [ ] colocamos separados por virgula, o nome da funcão de exibição e o nome da funcão de atualização.

  //primeiro sempre vem a função de exibição, que no caso você escolhe o nome que vai dar ao estado, e após vem a de atualização que por padrão, e aconselhavel botar o mesmo nome, sendo que com um "set" no inicio.

  //dentro dos ( ) do useState podemos colocar algum valor padrão que ja queremos que venha dentro da variavel.

  function trocarEstado() {
    setVerify(!verify) // quando a variavel tem ! na frente, funciona para inverter seu valor. false -> true ou true -> false.
  }

  return (
    <div className='p-8'>
      {verify && <Pessoa nome='Glauber' />}

      <button
        onClick={trocarEstado}
        className='bg-green-200 text-black p-2 rounded mt-6'
      >
        {/* o OnClick serve basicamente para executar algo quando o botão for clicado, que no caso passamos a função trocarEstado para ser executada*/}
        Trocar
      </button>
    </div>
  )
}
