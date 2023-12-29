'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import BeerStyle from './beerStyle';

type ProfileCardProps = {
  brewer: Brewer;
};

type Brewer = {
  fullName: string;
  bio: string;
  photoUrl: string;
  favoriteStyles: BeerStyleType[];
};

export type BeerStyleType = {
  name: string;
  icon: string; // svg link
};

const ProfileCard = ({ brewer }: ProfileCardProps) => {
  const favoriteStylesTitle = 'Favorite Styles';
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.screen.width <= 480);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isSmallScreen]);

  return (
    <ProfileCardWrapper>
      <ProfileLeftWrapper>
        <ProfilePhoto
          src={brewer.photoUrl}
          alt={brewer.fullName}
          width={0} // Need to set to zero see https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724
          height={0}
          sizes="100vw"
          style={{ width: '12rem' }}
        />
        <BeerStyles>
          <h3>{favoriteStylesTitle}</h3>
          <hr />
          <BeerStylesWrapper>
            {brewer.favoriteStyles.map((style) => (
              <BeerStyle key={style.name} name={style.name} icon={style.icon} />
            ))}
          </BeerStylesWrapper>
        </BeerStyles>
      </ProfileLeftWrapper>
      <ProfileRightWrapper>
        <BioWrapper $isSmallScreen={isSmallScreen}>
          <h1>{brewer.fullName}</h1>
          <hr />
          <p>{brewer.bio}</p>
        </BioWrapper>
      </ProfileRightWrapper>
    </ProfileCardWrapper>
  );
};

const ProfileCardWrapper = styled.div`
  display: flex;
  border-radius: 25px;
  border: 1.5px solid #65605b;
  box-shadow: 5px 10px 8px #888888;
  padding: 20px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProfileLeftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25rem;
  justify-content: center;
`;

const ProfileRightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  max-width: 40rem;
  white-space: pre-wrap;
`;

const BioWrapper = styled.div<{ $isSmallScreen: boolean }>`
  display: block;

  h1 {
    font-size: ${({ $isSmallScreen }) => ($isSmallScreen === true ? '2.6rem' : '3.6rem')};
  }

  hr {
    max-width: 30rem;
  }

  p {
    margin-top: 1rem;
  }
`;

const ProfilePhoto = styled(Image)`
  display: flex;
  border-radius: 50%;
  margin: auto;
  background-size: cover;
`;

const BeerStyles = styled.div`
  align-items: center;
  margin-top: 1rem;

  h3 {
    font-size: 1.35rem;
  }

  hr {
    max-width: 12rem;
    margin: auto;
  }
`;

const BeerStylesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 15rem;
`;

export default ProfileCard;
