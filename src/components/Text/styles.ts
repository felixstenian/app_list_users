import styled, {
  DefaultTheme,
  FlattenSimpleInterpolation,
  css
} from 'styled-components'

import { layout, position, space, system, typography } from 'styled-system'
import { TextProps } from '.'

interface WrapperModifiers {
  [key: string]: (theme: DefaultTheme) => FlattenSimpleInterpolation
}

const wrapperModifiers: WrapperModifiers = {
  biggerTitle: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  mediumTitle: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  smallTitle: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  subtitle: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  paragraph: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  caption: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `
}

export const Wrapper = styled.p<TextProps>`
  ${({ theme, variant, color }) => css`
    color: ${color};
    font-family: ${theme.font.family};
    ${!!variant && wrapperModifiers[variant](theme)};
  `}
  ${space};
  ${position};
  ${typography};
  ${layout};
  ${system({ cursor: true, wordBreak: true, wordWrap: true })};
`
