import styled from 'styled-components'
import {
  BorderProps,
  ColorProps,
  FlexProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system
} from 'styled-system'

export interface RowProps
  extends SpaceProps,
    LayoutProps,
    FlexProps,
    FlexboxProps,
    ShadowProps,
    GridProps,
    React.HTMLAttributes<HTMLDivElement>,
    BorderProps,
    Omit<ColorProps, 'color'> {
  ref?: React.ForwardedRef<unknown>
  as?: React.FC | string
  gap?: string | string[]
  cursor?: string
  wordBreak?: string
  wordWrap?: string
}

const Row: React.FC<RowProps> = styled.div<RowProps>(
  { display: 'flex' },
  system({ cursor: true, gap: true, wordWrap: true, wordBreak: true }),
  space,
  shadow,
  flexbox,
  position,
  layout,
  color,
  border,
  flexbox
)

export default Row
