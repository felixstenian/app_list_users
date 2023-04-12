import styled from 'styled-components'
import {
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
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
    ShadowProps,
    GridProps,
    React.HTMLAttributes<HTMLDivElement>,
    Omit<ColorProps, 'color'> {
  ref?: React.ForwardedRef<unknown>
  as?: React.FC | string
  gap?: string
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
  color
)

export default Row
