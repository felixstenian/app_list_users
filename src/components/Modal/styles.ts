import styled, { css } from 'styled-components'

import { Row } from 'components'
import { RowProps } from 'components/Row'

export const Wrapper = styled(Row)<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    position: fixed;
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: center;
    z-index: ${theme.layers.modal};
    background: ${theme.colors.overlay.light};
  `}
`

export const Container = styled(Row)<RowProps>`
  flex-direction: column;
  position: relative;
  min-width: 400px;
  margin-left: 24px;
  margin-right: 24px;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
`

export const CloseIcon = styled(Row)`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  cursor: pointer;
`
