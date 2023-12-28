'use client';
import React from 'react';
import styled from 'styled-components';

import BeerCard from './beerCard';

const BeerCards = () => (
  <WrapperDiv>
    <BeerCard
      width={134}
      height={185}
      fontSize={40}
      logo="/img/beers/campfire.svg"
      title="Campfire Stout"
    />
    <BeerCard width={162} height={224} fontSize={40} logo="/img/beers/pale.svg" title="Pale Ale" />
    <BeerCard
      width={210}
      height={198}
      fontSize={36}
      logo="/img/beers/golden.svg"
      title="Just Golden Ale"
    />
    <BeerCard width={200} height={212} fontSize={40} logo="/img/beers/hefe.svg" title="Hefe" />
    <BeerCard
      width={122}
      height={212}
      fontSize={40}
      logo="/img/beers/amber.svg"
      title="Amber Ale"
    />
    <BeerCard
      width={210}
      height={180}
      fontSize={40}
      logo="/img/beers/generic.svg"
      title="Generic Ale"
    />
    <BeerCard
      width={210}
      height={180}
      fontSize={36}
      logo="/img/beers/lawnchair.svg"
      title="Lawn Chair Lager"
    />
    <BeerCard width={210} height={217} fontSize={36} logo="/img/beers/hops.svg" title="IPA" />
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
