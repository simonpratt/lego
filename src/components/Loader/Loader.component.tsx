import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import colours from '../../colours/colours';

const PageLoaderContainer = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const loadingContainer = {
  width: '40px',
  height: '26px',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingCircle = {
  display: 'block',
  width: '10px',
  height: '10px',
  backgroundColor: colours.grey30,
  borderRadius: '5px',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
} as any; // Framer motion isn't accepting 'repeatType' but animation breaks without it

export interface LoaderProps {
  variant?: 'page-loader' | 'default';
}

const BaseLoader = () => (
  <motion.div
    style={loadingContainer}
    variants={loadingContainerVariants}
    initial='start'
    animate='end'
    data-cy='loader'
  >
    <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
  </motion.div>
);

const Loader = ({ variant = 'default' }: LoaderProps) => {
  if (variant === 'page-loader') {
    return (
      <PageLoaderContainer>
        <BaseLoader />
      </PageLoaderContainer>
    );
  }

  return <BaseLoader />;
};

export default Loader;
