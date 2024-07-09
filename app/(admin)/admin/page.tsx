import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';

import NewBeerModal from '@/components/Admin/newBeerModal';

const AdminHome: NextPage = withPageAuthRequired(
  async () => {
    // const { onOpen } = useDisclosure();
    const session = await getSession();
    const test = `Hello, ${session?.user.name}`;
    return (
      <div className="container mx-auto min-h-300">
        <h1>Edit Beers</h1>
        <p>{test}</p>
        <NewBeerModal />
      </div>
    );
  },
  { returnTo: '/admin' }
);

export default AdminHome;
