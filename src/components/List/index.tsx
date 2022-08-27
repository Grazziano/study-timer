import React, { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {
  const [tasks, setTasks] = useState([
    { task: 'React', time: '02:00:00' },
    { task: 'Javascript', time: '01:00:00' },
    { task: 'Typescript', time: '03:30:00' },
    { task: 'Express', time: '01:50:00' },
  ]);
  return (
    <aside className={style.taskList}>
      <h2
        onClick={() => {
          setTasks([...tasks, { task: 'Estudar Estado', time: '05:00' }]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
