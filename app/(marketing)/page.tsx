import React from 'react';

import Header from '@/components/HomePage/header';
import BodyComponent from '@/components/HomePage/body';
import type { Beer } from './api/recent-beers/route';
import { API_RECENT_BEERS } from '@/constants/routes';

export default async function Home() {
  const resp = await getRecentBeers();
  return (
    <>
      <Header />
      <BodyComponent beers={resp.beers} />
    </>
  );
}

const getRecentBeers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API_RECENT_BEERS}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const resp: { beers: Beer[] } = await res.json();
  return resp;
};
