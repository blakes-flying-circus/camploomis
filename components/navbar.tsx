'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from '@nextui-org/react';
import Link from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { API_LOGIN, ADMIN_HOME } from '@/constants/routes';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoString = 'CAMP LOOMIS';
  const loginString = 'Login';

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">{logoString}</p>
          </Link>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <a href={`${API_LOGIN}?returnTo=${process.env.NEXT_PUBLIC_BASE_URL}${ADMIN_HOME}`}>
            {loginString}
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="md:flex">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className={clsx(
                linkStyles({ color: 'foreground' }),
                'data-[active=true]:text-primary data-[active=true]:font-medium'
              )}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <a
            className={clsx(
              linkStyles({ color: 'foreground' }),
              'data-[active=true]:text-primary data-[active=true]:font-medium'
            )}
            href={`${API_LOGIN}?returnTo=${process.env.NEXT_PUBLIC_BASE_URL}${ADMIN_HOME}`}
          >
            {loginString}
          </a>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
