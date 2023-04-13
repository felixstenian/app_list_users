import styled, { css } from 'styled-components'
import { layout } from 'styled-system'

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const InputWraper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4rem;
  border: 0.2rem solid;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.gray};
    }
  `}
`

export const Input = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  `}
  ${layout};
`
export const Option = styled.option`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border: 0;
    cursor: pointer;
  `}
`
