import * as Style from './styles'

export type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => (
  <Style.Wrapper>{children}</Style.Wrapper>
)

export default Header
