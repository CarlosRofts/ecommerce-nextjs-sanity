'use client';

import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

export default function CartProvider({ children }: { children: ReactNode }) {
	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl="https://ecommerce-nextjs-sanity-olive.vercel.app//stripe/success"
			cancelUrl="https://ecommerce-nextjs-sanity-olive.vercel.app//stripe/error"
			// successUrl="http://localhost:3000/sucess"
			// cancelUrl="http://localhost:3000//error"
			currency="USD"
			billingAddressCollection={false}
			shouldPersist={true}
			language="en-US"
		>
			{children}
		</USCProvider>
	);
}
