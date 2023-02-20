import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					align={'center'}
					justify={'space-between'}>
					<Text>© 2023 Foss Store. Todos los derrechos reservado</Text>
					<Stack direction={'row'} spacing={6}>
						<chakra.a
							href={'#'}
							display={'inline-flex'}
							alignItems={'center'}
							justifyContent={'center'}
							w={6}
							h={4}
							rounded={'full'}
							bg={useColorModeValue('gray.200', 'gray.700')}
							_hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}>
							<FaTwitter />
						</chakra.a>
						<chakra.a
							href={'#'}
							display={'inline-flex'}
							alignItems={'center'}
							justifyContent={'center'}
							w={6}
							h={6}
							rounded={'full'}
							bg={useColorModeValue('gray.200', 'gray.700')}
							_hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}>
							<FaYoutube />
						</chakra.a>
						<chakra.a
							href={'#'}
							display={'inline-flex'}
							alignItems={'center'}
							justifyContent={'center'}
							w={6}
							h={6}
							rounded={'full'}
							bg={useColorModeValue('gray.200', 'gray.700')}
							_hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}>
							<FaInstagram />
						</chakra.a>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
