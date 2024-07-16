import React from 'react';

import Header from '@/components/HomePage/header';
import BodyComponent from '@/components/HomePage/body';
import type { Beer } from './api/recent-beers/route';

export default async function Home() {
  const beers = await getRecentBeers();
  return (
    <>
      <Header />
      <BodyComponent beers={beers} />
    </>
  );
}

const getRecentBeers = async () => {
  const res = await fetch('http://localhost:3000/api/recent-beers');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const beers: Beer[] = await res.json();
  return beers;
};
