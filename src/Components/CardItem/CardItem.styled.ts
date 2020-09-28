import styled,{ css } from 'styled-components';
import { motion } from 'framer-motion';

import base from 'Assets/styles/base';
import Modal from 'styled-react-modal'

export const Container = styled(motion.div)<{touched:boolean}>`
  display:flex;
  position:relative;
  text-decoration:
  ${({touched})=>
    touched &&  css`underline line-through gray`
  };
  
  cursor: pointer;
  margin-top:.3rem;
`;


export const Name = styled(motion.span)`
  ${base.span}
  width: 13rem;
`;

export const Price = styled(motion.span)`
  ${base.span}
  width: 4rem;
`;

export const DeleteIcon = styled.button`
  position: absolute;
  ${base.m_iconButton}
  width: 20px;
  height: 20px;
  min-width:5px;
  min-height:5px;
  padding:0;
`;

export const ModifyIcon = styled.button`
  position: absolute;
  left: 0 ;
  bottom: -1rem;
  ${base.m_iconButton}
  width: 20px;
  height: 20px;
  min-width:5px;
  min-height:5px;
  padding:0;
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

