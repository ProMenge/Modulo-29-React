import { useEffect, useState } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);

  const [nome, setNome] = useState('');

  //mount
  //update
  //ended

  useEffect(() => {

    console.log('O Componente iniciou')

    return () => {

      console.log('O componente finalizou!')
    }
  }, [])

  useEffect(() => {

    console.log('State Name Changed')
  }, [nome])

  useEffect(() => {

    console.log('A matéria A mudou para:' + materiaA)
  }, [materiaA])

  const changeName = (event) => {

    setNome(estadoAnterior => {
      return event.target.value;
    })
  }

  const renderResult = () => {
    const soma = parseFloat(materiaA) + parseFloat(materiaB) + parseFloat(materiaC);
    const media = soma / 3;
    
    if (media >= 7) {
      return (
        <p>Olá {nome}, você foi aprovado!</p>
      );
    } else {
      return (
        <p>Você {nome}, você está reprovado!</p>
      );
    }
  }

  return (
    <form action="">
      <input type="text" name="" id="" placeholder="Your Name Here:" onChange={changeName} />
      <input type="number" name="" id="" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseFloat(evento.target.value) || 0)} />
      <input type="number" name="" id="" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value) || 0)}/>
      <input type="number" name="" id="" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value) || 0)}/>
      {renderResult()}
    </form>
  )
}

export default Formulario;
