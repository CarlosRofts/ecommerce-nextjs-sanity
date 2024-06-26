'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

const links = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Hombre', href: '/Men' },
	{ name: 'Mujer', href: '/Women' },
	// { name: 'Teens', href: '/Teens' },
];

export default function Navbar() {
	const pathname = usePathname();
	const { handleCartClick } = useShoppingCart();
	return (
		<header className="mb-8 border-b bg-slate-950 text-white">
			<div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
				<Link href="/" className='flex'>
					<img className="max-w-12 mr-1" src="/ecommerce_logo_w.svg" alt="" />
					<h1 className="text-2xl md:text-4xl font-bold text-yellow-100 flex content-center items-center">
						Tienda<span className="text-primary">Online</span>
					</h1>
				</Link>

				<nav className="hidden gap-12 lg:flex 2xl:ml-16">
					{links.map((link, idx) => (
						<div key={idx}>
							{pathname === link.href ? (
								<Link className="text-lg font-semibold text-primary" href={link.href}>
									{link.name}
								</Link>
							) : (
								<Link href={link.href} className="text-lg font-semibold text-gray-100 transition duration-100 hover:text-primary">
									{link.name}
								</Link>
							)}
						</div>
					))}
				</nav>

				<div className="flex divide-x border-r sm:border-l">
					<Button
						variant={'default'}
						onClick={() => handleCartClick()}
						className="flex flex-col gap-y-.5 h-12 w-12 sm:h-20 sm:w-20 md:h-20 md:w-24 rounded-none py-0 bg-black"
					>
						<ShoppingBag className='text-white'/>
						<span className="hidden text-xs font-semibold text-gray-100 sm:block">Cart</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
