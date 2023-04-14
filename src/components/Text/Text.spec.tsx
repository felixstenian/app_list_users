import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'
import Text from '.'

describe('<Text />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Text>Text</Text>)

    expect(screen.getByText(/Text/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the text with the correct params', () => {
    renderWithTheme(
      <Text
        variant="biggerTitle"
        color="blue"
        cursor="pointer"
        wordBreak="break-all"
        wordWrap="break-word"
      >
        Text
      </Text>
    )

    expect(screen.getByText(/Text/i)).toHaveStyle({
      'font-size': '2.8rem',
      color: 'blue',
      cursor: 'pointer',
      'word-break': 'break-all',
      'word-wrap': 'break-word'
    })
  })
})
