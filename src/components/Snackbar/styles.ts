import { Row } from 'components'
import styled, { DefaultTheme, css } from 'styled-components'

const wrapperModifiers = {
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.alerts.warning};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.alerts.suecess};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.alerts.error};
  `
}

export const Wrapper = styled(Row)<{ open: boolean }>`
  position: fixed;
  right: 0;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  -webkit-animation: snackbar-slide-out 1.5s ease-in-out;
  animation: snackbar-slide-out 1.5s ease-in-out;

  @-webkit-@keyframes snackbar-slide-out {
    from {
      -webkit-transform: translateX(50%);
    }
    to {
      -webkit-transform: translateX(0);
    }
  }

  @keyframes snackbar-slide-out {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export const Content = styled(Row)<{
  type: 'success' | 'error' | 'warning'
}>`
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  width: fit-content;
  ${({ theme, type }) => css`
    color: ${theme.colors.darkGray};
    z-index: ${theme.layers.snackBar};
    ${!!type && wrapperModifiers[type](theme)}
  `}
`
export const CloseIcon = styled(Row)`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  cursor: pointer;
`
