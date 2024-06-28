// AddToBag.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddToBag, { ProductCart } from './AddToBag'
import { useShoppingCart } from 'use-shopping-cart'

// Mock the useShoppingCart hook
jest.mock('use-shopping-cart', () => ({
  useShoppingCart: jest.fn(),
}))

const mockedUseShoppingCart = useShoppingCart as jest.MockedFunction<typeof useShoppingCart>

const mockProduct: ProductCart = {
  name: 'Test Product',
  description: 'Test Description',
  price: 1000,
  currency: 'USD',
  image: { asset: { _ref: 'image-asset-ref' } },
  price_id: 'price_123',
}

describe('AddToBag Component', () => {
  beforeEach(() => {
    mockedUseShoppingCart.mockReturnValue({
      addItem: jest.fn(),
      handleCartClick: jest.fn(),
      cartCount: 0,
      cartDetails: {},
      clearCart: jest.fn(),
      redirectToCheckout: jest.fn(),
      decrementItem: jest.fn(),
      incrementItem: jest.fn(),
      loadCart: jest.fn(),
      removeItem: jest.fn(),
      setItemQuantity: jest.fn(),
      shouldDisplayCart: false,
    } as any) // use `as any` to suppress TypeScript errors for this mock
  })

  test('renders without error', () => {
    render(<AddToBag {...mockProduct} />)
    const button = screen.getByRole('button', { name: /add to cart/i })
    expect(button).toBeInTheDocument()
  })

  test('calls addItem and handleCartClick on button click', () => {
    const { addItem, handleCartClick } = useShoppingCart()

    render(<AddToBag {...mockProduct} />)
    const button = screen.getByRole('button', { name: /add to cart/i })
    
    fireEvent.click(button)

    expect(addItem).toHaveBeenCalledWith({
      name: 'Test Product',
      description: 'Test Description',
      price: 1000,
      currency: 'USD',
      image: expect.any(String), // urlFor returns a URL string
      price_id: 'price_123',
    })
    expect(handleCartClick).toHaveBeenCalled()
  })
})
