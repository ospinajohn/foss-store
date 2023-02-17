import { Box, Grid } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import Card from './Card';

const product = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    image:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
];
function Home() {
	return (
		<Fragment>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Card product={product} />
      </Grid>
		</Fragment>
	);
}

export default Home;
