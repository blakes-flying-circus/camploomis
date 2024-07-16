'use client';
import React from 'react';
import styled from 'styled-components';

import ProfileCard from '@/components/ProfileCard/profileCard';

export default function AboutPage() {
  const title = 'Meet the Brewers';

  const brewers = [
    {
      fullName: 'Blake Thompson',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      photoUrl: '/img/profileImages/blake.jpg',
      favoriteStyles: [
        { name: 'IPA', icon: 'img/icons/ipa.svg' },
        { name: 'Pilsner', icon: 'img/icons/pilsner.svg' },
        { name: 'Tripel', icon: 'img/icons/tripel.svg' },
        { name: 'Pale Ale', icon: 'img/icons/ale.svg' },
      ],
    },
    {
      fullName: 'Jake Cardin',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      photoUrl: '/img/profileImages/jake.jpg',
      favoriteStyles: [
        { name: 'Lager', icon: 'img/icons/lager.svg' },
        { name: 'Pilsner', icon: 'img/icons/pilsner.svg' },
        { name: 'Abmber', icon: 'img/icons/ale.svg' },
        { name: 'Pale Ale', icon: 'img/icons/ale.svg' },
      ],
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <HeaderDiv style={{ backgroundImage: 'url(/img/aboutUsHero.png)' }} />
      </HeaderWrapper>
      <AboutSectionWrapper>
        <h1>{title}</h1>
        <hr />
        {brewers.map((brewer) => (
          <ProfileCard key={brewer.fullName} brewer={brewer} />
        ))}
      </AboutSectionWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
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
`;

const AboutSectionWrapper = styled.div`
  text-align: center;
  padding: 2rem 4rem;

  h1 {
    font-size: 3.6rem;
  }

  > div:nth-child(n + 3) {
    margin-top: 4rem;
  }
`;
