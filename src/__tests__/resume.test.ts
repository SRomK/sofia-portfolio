import { describe, it, expect } from 'vitest'
import { bio, experience, stack, projects } from '../data/resume'

describe('bio', () => {
  it('has required string fields', () => {
    expect(bio.name).toBeTruthy()
    expect(bio.email).toBeTruthy()
    expect(bio.github).toBeTruthy()
    expect(bio.linkedin).toBeTruthy()
    expect(bio.titleLine1).toBeTruthy()
    expect(bio.titleLine2).toBeTruthy()
  })

  it('email is valid format', () => {
    expect(bio.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it('github and linkedin are valid URLs', () => {
    expect(bio.github).toMatch(/^https?:\/\//)
    expect(bio.linkedin).toMatch(/^https?:\/\//)
  })

  it('has two languages defined', () => {
    expect(bio.languages).toHaveLength(2)
    bio.languages.forEach(lang => {
      expect(lang.name).toBeTruthy()
      expect(lang.level).toBeTruthy()
    })
  })

  it('stats have non-empty values and labels', () => {
    expect(bio.stats.length).toBeGreaterThan(0)
    bio.stats.forEach(stat => {
      expect(stat.value).toBeTruthy()
      expect(stat.label).toBeTruthy()
    })
  })
})

describe('experience', () => {
  it('has at least one entry', () => {
    expect(experience.length).toBeGreaterThan(0)
  })

  it('every entry has required fields', () => {
    experience.forEach(item => {
      expect(item.company).toBeTruthy()
      expect(item.role).toBeTruthy()
      expect(item.period).toBeTruthy()
      expect(item.bullets.length).toBeGreaterThan(0)
      expect(item.tags.length).toBeGreaterThan(0)
    })
  })

  it('periods follow expected format', () => {
    experience.forEach(item => {
      expect(item.period).toMatch(/\w+ \d{4}/)
    })
  })
})

describe('stack', () => {
  it('has categories with items', () => {
    expect(stack.length).toBeGreaterThan(0)
    stack.forEach(category => {
      expect(category.label).toBeTruthy()
      expect(category.items.length).toBeGreaterThan(0)
    })
  })

  it('contains Vitest in Testing & Quality', () => {
    const testing = stack.find(c => c.label === 'Testing & Quality')
    expect(testing).toBeDefined()
    expect(testing?.items).toContain('Vitest')
  })
})

describe('projects', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('every project has required fields', () => {
    projects.forEach(project => {
      expect(project.number).toBeTruthy()
      expect(project.name).toBeTruthy()
      expect(project.company).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.tags.length).toBeGreaterThan(0)
    })
  })

  it('projects with a URL have a valid format', () => {
    projects.filter(p => p.url).forEach(p => {
      expect(p.url).toMatch(/^https?:\/\//)
    })
  })
})
