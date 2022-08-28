import React, { Component } from 'react';
import style from './Button.module.scss';

interface IProps {
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default class Button extends Component<IProps> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
