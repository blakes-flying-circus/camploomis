'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  link as linkStyles,
} from '@nextui-org/react';
import NextLink from 'next/link';
import clsx from 'clsx';

import { API_LOGOUT, ADMIN_HOME } from '@/constants/routes';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoString = 'CAMP LOOMIS ADMIN';
  const logoutString = 'Logout';

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">{logoString}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <NextLink
            href={`${API_LOGOUT}?returnTo=${process.env.NEXT_PUBLIC_BASE_URL}${ADMIN_HOME}`}
          >
            {logoutString}
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NextLink
            className={clsx(
              linkStyles({ color: 'foreground' }),
              'data-[active=true]:text-primary data-[active=true]:font-medium'
            )}
            href="/api/auth/login"
          >
            {logoutString}
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
