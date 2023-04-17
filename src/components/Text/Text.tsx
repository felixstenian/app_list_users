import {
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'
import * as Style from './styles'

type Variant =
  | 'biggerTitle'
  | 'mediumTitle'
  | 'smallTitle'
  | 'subtitle'
  | 'paragraph'
  | 'caption'

export interface TextProps
  extends TypographyProps,
    SpaceProps,
    PositionProps,
    LayoutProps,
    React.HTMLAttributes<HTMLParagraphElement>,
    Omit<ColorProps, 'color'> {
  variant?: Variant
  children?: React.ReactNode
  as?: React.FC | string
  cursor?: string
  wordBreak?: string
  wordWrap?: string
}

const Text = ({
  variant = 'paragraph',
  color,
  children,
  ...rest
}: TextProps) => {
  const asVariant = (variant: Variant) => {
    const variants = {
      biggerTitle: 'h1',
      mediumTitle: 'h2',
      smallTitle: 'h3',
      subtitle: 'subtitle',
      paragraph: 'paragraph',
      caption: 'caption'
    }

    return variants[variant]
  }
  return (
    <Style.Wrapper
      variant={variant}
      as={asVariant(variant)}
      color={color}
      {...rest}
    >
      {children}
    </Style.Wrapper>
  )
}

export default Text
