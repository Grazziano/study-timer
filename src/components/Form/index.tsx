import React, { Component } from 'react';
import Button from '../Button';
import './style.scss';

export default class Form extends Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <Button />
      </form>
    );
  }
}
