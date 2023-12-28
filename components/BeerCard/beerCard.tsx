'use client';
import React from 'react';
import styled from 'styled-components';
import { Image } from '@nextui-org/react';

type BeerCardProps = {
  logo: string;
  title: string;
  width: number;
  height: number;
  fontSize: number;
};

const BeerCard = ({ logo, title, width, height, fontSize }: BeerCardProps) => (
  <BeerCardWrapper>
    <BeerCardFront>
      <BeerCardImage src={logo} width={width} height={height} />
      <BeerCardTitle fontSize={fontSize}>{title}</BeerCardTitle>
    </BeerCardFront>
  </BeerCardWrapper>
);

const BeerCardFront = styled.div`
  width: 250px;
  height: 350px;
  padding: 20px;
  background-color: #e2492c;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1rem;

  div {
    margin: 0.5rem auto 0;
  }
`;

const BeerCardTitle = styled.h3<{fontSize: number}>`
  font-family: 'Phosphate-Inline';
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: #ffffff;
  line-height: 45px;
  margin-top: 1rem;
`;

const BeerCardWrapper = styled.div`
  padding: 1em;
`;

const BeerCardImage = styled(Image)<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export default BeerCard;
