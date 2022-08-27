import React from 'react';
import Button from '../Button';
import Watch from './Watch';
import style from './Stopwatch.module.scss';

function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default Stopwatch;
