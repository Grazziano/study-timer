import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Watch from './Watch';
import style from './Stopwatch.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(String(selected.time)));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}

export default Stopwatch;
