import styled, { css } from 'styled-components'
import { border, layout, space } from 'styled-system'

import { ImageProps } from '.'

export const Figure = styled.figure<ImageProps>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
  ${space}
  ${layout}
  ${border}
  overflow: hidden;
`

export const Img = styled.img<{ objectFit?: string } & ImageProps>`
  object-fit: ${({ objectFit }) => objectFit};
  width: 100%;
  height: 100%;
`
