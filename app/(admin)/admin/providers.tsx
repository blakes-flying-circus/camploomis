import { UserProvider } from '@auth0/nextjs-auth0/client';

type UserProvidersProps = {
  children: React.ReactNode;
};

export default function Auth0Provider({ children }: UserProvidersProps) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
