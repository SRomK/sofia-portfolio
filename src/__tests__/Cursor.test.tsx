import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import Cursor from '../components/Cursor'

describe('Cursor', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the SVG cursor on pointer devices', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false })
    const { container } = render(<Cursor />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders nothing on touch devices', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true })
    const { container } = render(<Cursor />)
    expect(container.firstChild).toBeNull()
  })
})
