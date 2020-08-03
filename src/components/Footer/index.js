/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/UchoaTI">
          Lucas Uchôa
        </a>
        {'  '}
        <a>na </a>
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
