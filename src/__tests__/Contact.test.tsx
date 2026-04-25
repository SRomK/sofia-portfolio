import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../sections/Contact'
import { bio } from '../data/resume'

describe('Contact', () => {
  it('renders the CTA heading', () => {
    render(<Contact />)
    expect(screen.getByText(/looking for a frontend developer/i)).toBeInTheDocument()
  })

  it('renders a mailto link with the correct email', () => {
    render(<Contact />)
    const emailLinks = screen.getAllByRole('link', { name: new RegExp(bio.email, 'i') })
    expect(emailLinks.length).toBeGreaterThan(0)
    expect(emailLinks[0]).toHaveAttribute('href', `mailto:${bio.email}`)
  })

  it('renders a LinkedIn link that opens in a new tab', () => {
    render(<Contact />)
    const linkedinLink = screen.getByRole('link', { name: /sofia romero kamermann/i })
    expect(linkedinLink).toHaveAttribute('href', bio.linkedin)
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('renders the GitHub link in the footer', () => {
    render(<Contact />)
    const ghLink = screen.getByRole('link', { name: /github/i })
    expect(ghLink).toHaveAttribute('href', bio.github)
  })
})
