import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'

import Image from '.'

describe('<Image />', () => {
  it('1. should render the reading', () => {
    const src = 'https://randomuser.me/api/portraits/women/2.jpg'
    const { container } = renderWithTheme(
      <Image src={src} data-testid="image" />
    )

    expect(screen.getByTestId('image')).toBeInTheDocument()
    expect(screen.getByRole('figure')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', src)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render an image with the given props', () => {
    const src = 'image.jpg'
    const alt = 'alt text'
    const width = '100px'
    const height = '200px'
    const objectFit = 'cover'

    renderWithTheme(
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        data-testid="image"
      />
    )

    expect(screen.getByRole('figure')).toHaveAttribute('width', width)
    expect(screen.getByRole('figure')).toHaveAttribute('height', height)

    expect(screen.getByRole('img')).toHaveAttribute('src', src)
    expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
    expect(screen.getByRole('img')).toHaveStyle({ objectFit: objectFit })
  })
})
