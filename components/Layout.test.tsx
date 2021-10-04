import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  it('renders', () => {
    render(
      <Layout>
        <h1>Test title</h1>
      </Layout>
    )

    expect(screen.getByText('Test title')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
