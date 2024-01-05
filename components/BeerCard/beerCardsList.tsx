'use client';
import React from 'react';
import styled from 'styled-components';

import BeerCard from './beerCard';
import type { Beer } from '@/app/api/recent-beers/route';

type BeerCardListProps = {
  beers: Beer[];
};

const BeerCards = ({ beers }: BeerCardListProps) => (
  <WrapperDiv>
    {beers &&
      beers.map((beer) => (
        <BeerCard
          key={beer.name}
          width={beer.imageWidth}
          height={beer.imageHeight}
          fontSize={beer.titleFontSize}
          logo={beer.imagePath}
          title={beer.name}
        />
      ))}
  </WrapperDiv>
);

const WrapperDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

export default BeerCards;
