import styled from 'styled-components';
import base from 'Assets/styles/base';
import mixins from 'Assets/styles/mixins';
import { motion } from 'framer-motion';


export const Container = styled.div`

`;

export const IconButton = styled(motion.button)`
  margin:auto;
  ${base.m_iconButton}
  ${mixins.centralize}
  font-size:1.8rem;
  font-weight:500;
  margin-top:2rem;

  padding:1.5rem;
  cursor:pointer;
`;