import type { Beer } from '@/app/api/recent-beers/route';
import admin from '@/lib/firebase/admin';

export const getRecentBeers = async () => {
  const db = admin.firestore();
  const beers = await db.collection('beers').limit(8).get();

  const responseBeers: Beer[] = [];
  beers.forEach((beer) => {
    responseBeers.push(beer.data() as Beer);
  });

  return responseBeers;
};
