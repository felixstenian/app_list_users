import styled, { css } from 'styled-components'

import { Row } from 'components'

export const Wrapper = styled(Row)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Loader = styled(Row)`
  ${({ theme }) => css`
    border: 8px solid ${theme.colors.lightGray};
    border-top: 8px solid ${theme.colors.secondary};
  `}
  border-radius: 50%;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
