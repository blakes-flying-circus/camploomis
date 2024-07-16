import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

import NewBeerModal from '@/components/Admin/newBeerModal';

const AdminHome = withPageAuthRequired(
  async () => {
    // const { onOpen } = useDisclosure();
    const session = await getSession();
    const test = `Hello, ${session?.user.name}`;
    const editBeers = 'Edit Beers';
    return (
      <div className="container mx-auto min-h-300">
        <h1>{editBeers}</h1>
        <p>{test}</p>
        <NewBeerModal />
      </div>
    );
  },
  { returnTo: '/admin' }
);

export default AdminHome;
