import { ReactNode } from 'react';
import logo from '../../assets/foss.svg';
import {
	Box,
	Flex,
	Link,
	useColorModeValue,
	Stack,
	useColorMode,
	Input,
	Text,
	Badge,
} from '@chakra-ui/react';
import { FaRegSmileBeam } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineShoppingBag } from 'react-icons/md ';
import { Link as LinkR } from 'react-router-dom';

const NavLink = ({ children }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}>
		{children}
	</Link>
);

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<Box>
			<Flex
				alignItems={'center'}
				justifyContent={'space-between'}
				px={8}
				py={4}>
				<Stack
					direction='row'
					alignItems='center'
					spacing={2}
					width='50%'
					gap={'20px'}>
					<Box className='logo group'>
						<LinkR to='/home'>
							<span>
								<img
									src={logo}
									alt='logo'
									width='106'
									height='21'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'></img>
							</span>
						</LinkR>
						<Text fontSize='-moz-initial' fontWeight='light'>
							Shop
						</Text>
					</Box>

					<Box className='search'>
						<Flex
							className='search_group group'
							alignItems='center'
							position='relative'>
							<FiSearch
								className='uil uil-search'
								style={{
									position: 'absolute',
									zIndex: '1',
									marginLeft: '12px',
								}}
							/>
							<div class='search'>
								<div class='search_group group'>
									<a href='#'>
										<i class='uil uil-search'></i>
									</a>
									<input
										type='text'
										name='input-search'
										class='search'
										placeholder='Buscar productos...'
									/>
								</div>
							</div>
						</Flex>
					</Box>
				</Stack>

				<ul className='datos group'>
					<div className='opciones'>
						<li>
							<Badge
								className='number'
								alignItems={'center'}
								justifyContent={'center'}
								fontSize={'xs'}
								px={2}
								py={1}
								mt={-1}
								borderRadius='full'
								position='absolute'
								top='-2'
								left={'-2'}
								transition='all 0.2s'
								style={{
									background: 'rgba(233, 236, 239, 0.5)',
									zIndex: '-1',
								}}>
								3
							</Badge>
						</li>
						<a href='#'>
							<MdOutlineShoppingBag className='uil uil-shopping-bag' />
						</a>
					</div>
					<ul className='group'>
						<li>
							<a href=''>John James</a>
						</li>
						<li>
							<a href='#'>
								<i className='uil uil-angle-down'></i>
								<FaRegSmileBeam className='uil uil-smile-beam' />
							</a>
						</li>
					</ul>
				</ul>
			</Flex>
		</Box>
	);
}
