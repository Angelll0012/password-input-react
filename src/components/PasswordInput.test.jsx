import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import PasswordInput from './PasswordInput'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('PasswordInput', () => {
  it('renders a password field', () => {
    render(<PasswordInput />)

    expect(screen.getByPlaceholderText('Enter your password').type).toBe(
      'password',
    )
  })

  it('handles password changes', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {})
    render(<PasswordInput />)

    fireEvent.change(screen.getByPlaceholderText('Enter your password'), {
      target: { value: 'secret' },
    })

    expect(log).toHaveBeenCalledWith('Entering password...')
  })
})
