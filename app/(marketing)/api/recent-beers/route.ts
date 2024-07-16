import { NextResponse } from 'next/server';

import { getRecentBeers } from '@/lib/server/beers';

export type Beer = {
  name: string;
  titleFontSize: number;
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
};

export async function GET() {
  const beers = await getRecentBeers();
  return NextResponse.json({ beers });
}
