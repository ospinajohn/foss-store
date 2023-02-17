import { ReactNode } from 'react';
import logo from '../../assets/foss.svg';
import {
	Icon,
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Grid,
	IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaRegSmileBeam } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { FaSmile } from 'react-icons/fa';

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
				<section className='logo_search group'>
					<div className='logo group'>
						<span>
							<img
								src={logo}
								alt='logo'
								width='106'
								height='21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'></img>
						</span>
						<a href='#'>Shop</a>
					</div>
					<Box className='search'>
						<div className='search_group group'>
							<a href='#'>
								<FiSearch className='uil-search' />
							</a>
							<input
								type='text'
								name='input-search'
								className='search'
								placeholder='Buscar producto'
							/>
						</div>
					</Box>
				</section>

				<ul className='datos group'>
					<div className='opciones group'>
						<a href='#'>
							<i className='uil uil-heart'></i>
						</a>
						<a href='#'>
							<i className='uil uil-shopping-bag'></i>
							<MdOutlineShoppingBag className='uil uil-shopping-bag' />
						</a>
					</div>

					{/* Pendiente de implementar el numero de productos en el carrito */}
					<li>
						<a href='#'>
							<span className='number'>0</span>
						</a>
					</li>

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
