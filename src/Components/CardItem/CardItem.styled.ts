import styled,{ css } from 'styled-components';
import { motion } from 'framer-motion';

import base from 'Assets/styles/base';
import Modal from 'styled-react-modal'


export const Container = styled(motion.div)<{touched:boolean}>`
  display:flex;
  text-decoration:
  ${({touched})=>
    touched &&  css`underline line-through gray`
  };
  
  cursor: pointer;
  margin-top:.8rem;
`;


export const Name = styled.span`
  ${base.span}
  width: 13rem;
`;

export const Price = styled.span`
  position:relative;
  ${base.span}
  min-width: 2rem;
  max-width:5rem;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  left: -1.6rem;
  top:0;
  background-color:transparent;

  svg{
    z-index: 99 !important;
    height: 1.5rem;
    width: 1.5rem;
    fill:#c13e46;
  }
`;

export const ModifyIcon = styled.div`
  position: absolute;
  left: -2.6rem;
  bottom:.2rem;

  background-color:white;
  border-radius:50%;
  display:flex;
  padding:.09rem;
  justify-content:center;
  align-items:center;
  font-weight:900;
  svg{
    z-index: 99 !important;
    height: .9rem;
    width: .9rem;
    fill:black;
  }
`;

export const StyledModal = Modal.styled`
  width: 20rem;
  min-height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:black;
  border-radius:5px;
  background-color:#222831;
  transition:500ms;
`;

