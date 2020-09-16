import styled from 'styled-components';
import { motion } from 'framer-motion';

import base from 'Assets/styles/base';


export const Container = styled.div`
  display:flex;
`;

export const Name = styled(motion.span)`
  ${base.span}
  width: 13rem;
`;

export const Price = styled(motion.span)`
  ${base.span}
  width: 3rem;
`;