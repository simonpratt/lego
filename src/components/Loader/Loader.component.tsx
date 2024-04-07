import React, { useMemo } from 'react';
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

export interface BaseLoaderProps {
  size: 'sm' | 'md';
}

export interface LoaderProps {
  variant?: 'page-loader' | 'default';
  size?: 'sm' | 'md';
}

const BaseLoader = ({ size }: BaseLoaderProps) => {
  const loadingCircleWithSize = useMemo(() => {
    const sizePx = size === 'md' ? '10px' : '5px';

    return {
      ...loadingCircle,
      width: sizePx,
      height: sizePx,
    };
  }, [size]);

  const loadingContainerWithSize = useMemo(() => {
    const widthPx = size === 'md' ? '40px' : '20px';
    const heightPx = size === 'md' ? '26px' : '13px';

    return {
      ...loadingContainer,
      width: widthPx,
      height: heightPx,
    }
  }, [size]);

  return (
    <motion.div
      style={loadingContainerWithSize}
      variants={loadingContainerVariants}
      initial='start'
      animate='end'
      data-testid='loader'
    >
      <motion.span style={loadingCircleWithSize} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircleWithSize} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircleWithSize} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    </motion.div>
  );
};

const Loader = ({ variant = 'default', size = 'md' }: LoaderProps) => {
  if (variant === 'page-loader') {
    return (
      <PageLoaderContainer>
        <BaseLoader size={size} />
      </PageLoaderContainer>
    );
  }

  return <BaseLoader size={size} />;
};

export default Loader;
