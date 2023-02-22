import { Box, Grid } from '@chakra-ui/react';
import React, { Fragment, useEffect } from 'react';
import { MetaData } from './layout/MetaData';
import Card from './product/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';

const product = [
	{
		id: 1,
		name: 'Product 1',
		price: 100,
		image:
			'https://static.zara.net/photos///2022/I/0/2/p/5625/178/250/2/w/563/5625178250_6_1_1.jpg?ts=1655798291586',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 200,
		image:
			'https://static.zara.net/photos///2022/I/0/2/p/1538/331/401/2/w/563/1538331401_6_1_1.jpg?ts=1656417907553',
	},
	{
		id: 3,
		name: 'Product 3',
		price: 300,
		image:
			'https://static.zara.net/photos///2023/V/0/2/p/0722/402/250/2/w/563/0722402250_2_4_1.jpg?ts=1672844456705',
	},
	{
		id: 4,
		name: 'Product 4',
		price: 400,
		image:
			'https://static.zara.net/photos///2023/V/0/2/p/0526/404/048/2/w/563/0526404048_2_1_1.jpg?ts=1673542344771',
	},
];
function Home() {
	const { products, loading, error } = useSelector(state => state.products);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);


	return (
		<Fragment>
			<MetaData title={'Inicio'} />
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<Grid templateColumns='repeat(4, 1fr)' gap={6}>
					<Card products={products} />
				</Grid>
			)}
		</Fragment>
	);
}

export default Home;
