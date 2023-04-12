import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
