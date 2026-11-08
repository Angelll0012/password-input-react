import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import SubmitButton from './SubmitButton'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('SubmitButton', () => {
  it('handles mouse enter and leave events', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {})
    render(<SubmitButton />)

    const button = screen.getByRole('button', { name: 'Submit Password' })
    fireEvent.mouseEnter(button)
    fireEvent.mouseLeave(button)

    expect(log).toHaveBeenNthCalledWith(1, 'Mouse Entering')
    expect(log).toHaveBeenNthCalledWith(2, 'Mouse Exiting')
  })
})
