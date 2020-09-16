import styled,{ css } from 'styled-components';
import { motion } from 'framer-motion';

import base from 'Assets/styles/base';


export const Container = styled.div<{touched:boolean}>`
  display:flex;
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
  width: 3rem;
`;