import React from 'react';
import style from './Watch.module.scss';

interface Props {
  time: number | undefined;
}

function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.watchNumber}>{minuteTen}</span>
      <span className={style.watchNumber}>{minuteUnit}</span>
      <span className={style.watchDivision}>:</span>
      <span className={style.watchNumber}>{secondTen}</span>
      <span className={style.watchNumber}>{secondUnit}</span>
    </>
  );
}

export default Watch;
