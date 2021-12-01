import React from 'react';
import { Title } from '../../components';
import CardImage from '../../images/card.png';

const Challenge = () => {
  const MAIN_CONTAINER = 'flex flex-col w-full h-full justify-center items-center min-h-screen ' +
    'bg-indigo-600\t text-white';
  const CONTAINER_CHALLENGE = 'flex justify-center items-center h-80 w-11/12 flex-none -ml-full rounded-3xl ' +
    'transform shadow-lg bg-gradient-to-br from-yellow-300 to-yellow-500 -rotate-1 sm:-rotate-2';
  const CONTAINER_BACKGROUND = 'bg-white w-10/12 flex justify-center items-center rounded-3xl';

  const CONTAINER_CARD = '';
  const TEXT_GRAY = '';
  const TITLE_CARD = '';

  return (
    <div className={MAIN_CONTAINER}>
      <Title>
        Bienvenidos al reto 🍕 Pizzita 🍕
      </Title>

      <div className={CONTAINER_BACKGROUND}>
        <div className={CONTAINER_CHALLENGE}>

          <div className={CONTAINER_CARD}>
            <span className={TEXT_GRAY}>Pago a 24 meses</span>
            <span className={TITLE_CARD} >$579/ por mes</span>
            <span className={TEXT_GRAY}>Pagando un enganche de $7,500 pesos</span>
          </div>

          <img className="w-80 h-44 ml-10" src={CardImage} />

        </div>
      </div>

      <a className="underline" href="https://tailwindcss.com/docs" target="_blank">
        Docs
      </a>
    </div>
  );
}

export default Challenge;
