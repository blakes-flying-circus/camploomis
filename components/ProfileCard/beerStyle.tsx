import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { type BeerStyleType } from './profileCard';

const BeerStyle = ({ name, icon }: BeerStyleType) => (
  <StyleWrapper>
    <Image
      width={0} // Need to set to zero see https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724
      height={0}
      sizes="100vw"
      style={{ width: '3rem', height: '3rem' }}
      src={icon}
      alt={name}
    />
    <p>{name}</p>
  </StyleWrapper>
);

const StyleWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  p {
    margin-top: 0.8rem;
  }
`;

export default BeerStyle;
