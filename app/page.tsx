'use client';
import React from 'react';
import { Image } from '@nextui-org/react';
import styled from 'styled-components';

import BeerCards from '@/components/BeerCard/beerCardsList';

export default function Home() {
  const recentBeersTitle = 'Our Recent Beers';

  return (
    <>
      <HeaderWrapper>
        <HeaderDiv style={{ backgroundImage: 'url(/img/beerhome.png)' }} />
        <SteamDiv>
          <SteamImage src="/img/clouds.png" alt="steam" />
        </SteamDiv>
        <LogoDiv>
          <Image src="/img/camploomisLogoHero.png" alt="logo" />
        </LogoDiv>
      </HeaderWrapper>
      <BodyDiv>
        <BodyTitle>{recentBeersTitle}</BodyTitle>
        <BeerCards />
      </BodyDiv>
    </>
  );
}
const HeaderWrapper = styled.div`
  background-color: #0b1011;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const HeaderDiv = styled.div`
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  max-height: 999px;

  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.55;
`;

const LogoDiv = styled.div`
  margin-top: 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
`;

const SteamDiv = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 250.625em;
  height: 43.75em;
  -webkit-animation: SteamLoop 80s linear infinite;
  animation: SteamLoop 80s linear infinite;

  @keyframes SteamLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
`;
const SteamImage = styled(Image)`
  margin-top: 25rem;
`;

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
