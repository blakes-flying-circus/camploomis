'use client';
import styled from 'styled-components';

import BeerCards from '@/components/BeerCard/beerCardsList';
import type { Beer } from '@/app/api/recent-beers/route';

type BodyProps = {
  beers: Beer[];
};

const BodyComponent = ({ beers }: BodyProps) => {
  const recentBeersTitle = 'Our Recent Beers';
  return (
    <BodyDiv>
      <BodyTitle>{recentBeersTitle}</BodyTitle>
      <BeerCards beers={beers} />
    </BodyDiv>
  );
};

export default BodyComponent;

const BodyDiv = styled.div`
  width: 100%;
  display: grid;
  padding: 4rem;
  margin-top: 1rem;
`;

const BodyTitle = styled.h1`
  color: #333333;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 1.2;
`;
