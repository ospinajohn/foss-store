import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const IMAGE =
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function Card({ product }) {
	return (
		<Fragment>
			{product.map(product => (
				<Center py={12} key={product.id}>
					<Box
						role={'group'}
						p={6}
						maxW={'330px'}
						w={'full'}
						bg={useColorModeValue('white', 'gray.800')}
						boxShadow={'2xl'}
						rounded={'lg'}
						pos={'relative'}
						zIndex={1}>
						<Box
							rounded={'lg'}
							mt={-12}
							pos={'relative'}
							height={'230px'}
							_after={{
								transition: 'all .3s ease',
								content: '""',
								w: 'full',
								h: 'full',
								pos: 'absolute',
								top: 5,
								left: 0,
								backgroundImage: `url(${product.image})`,
								filter: 'blur(15px)',
								zIndex: -1,
							}}
							_groupHover={{
								_after: {
									filter: 'blur(20px)',
								},
							}}>
							<Image
								rounded={'lg'}
								height={230}
								width={282}
								objectFit={'cover'} 
								src={product.image}
							/>
						</Box>
						<Stack pt={10} align={'center'}>
							<Text
								color={'gray.500'}
								fontSize={'sm'}
								textTransform={'uppercase'}>
								Brand
							</Text>
							<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
								{product.name}
							</Heading>
							<Stack direction={'row'} align={'center'}>
								<Text fontWeight={800} fontSize={'xl'}>
									{product.price}
								</Text>
								<Text textDecoration={'line-through'} color={'gray.600'}>
									$199
								</Text>
							</Stack>
						</Stack>
						{/* agragamos el boton de comprar + icono */}
						<Stack
							// correrlo hacia la derecha
							direction={'row'}
							// correrlo hacia abajo
							mt={2}
							// centrar el boton
							justify={'center'}
							// centrar el icono
							align={'center'}
							// separar el boton del icono
							spacing={2}>
							<Text
								fontWeight={600}
								color={useColorModeValue('gray.600', 'gray.200')}>
								Agregar
							</Text>
							<Box
								p={2} // es el padding
								_hover={{
									bg: useColorModeValue('gray.200', 'gray.900'),
								}}
								rounded={'full'}>
								<FiShoppingCart
									// color del icono
									color={useColorModeValue('gray.600', 'gray.200')}
									// tamaño del icono
									size={20}
								/>
							</Box>
						</Stack>
					</Box>
				</Center>
			))}
		</Fragment>
	);
}
