import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../components/Nav'

describe('Nav', () => {
  it('renders the hamburger button', () => {
    render(<Nav />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('panel is hidden on initial render', () => {
    render(<Nav />)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('opens the panel when hamburger is clicked', async () => {
    render(<Nav />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes the panel when close button is clicked', async () => {
    render(<Nav />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    await userEvent.click(screen.getByRole('button', { name: /close menu/i }))
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    })
  })

  it('panel contains all section links', async () => {
    render(<Nav />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /stack/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })
})
