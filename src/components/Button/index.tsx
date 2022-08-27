import React, { Component } from 'react';
import style from './Button.module.scss';

interface IProps {
  children: React.ReactChild;
}

export default class Button extends Component<IProps> {
  render() {
    return <button className={style.button}>{this.props.children}</button>;
  }
}
