'use client'
import { useState } from 'react'
import Pessoa from '@/components/Pessoa'

export default function Home() {
  const [verify, setVerify] = useState(true)

  function trocarEstado() {
    setVerify(!verify)
  }

  return (
    <div>
      {verify && <Pessoa nome='Glauber' />}
      <button onClick={trocarEstado}>Trocar</button>
    </div>
  )
}
