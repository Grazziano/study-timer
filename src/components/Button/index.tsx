import React, { Component } from 'react';
import style from './Button.module.scss';

interface IProps {
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export default class Button extends Component<IProps> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
