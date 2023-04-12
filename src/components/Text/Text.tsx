import {
  ColorProps,
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
  | 'body'
  | 'caption'

export interface TextProps
  extends TypographyProps,
    SpaceProps,
    PositionProps,
    React.HTMLAttributes<HTMLParagraphElement>,
    Omit<ColorProps, 'color'> {
  variant?: Variant
  children?: React.ReactNode
  as?: React.FC | string
  cursor?: string
  wordBreak?: string
  wordWrap?: string
}

const Text = ({ variant = 'body', color, children, ...rest }: TextProps) => {
  const asVariant = (variant: Variant) => {
    const variants = {
      biggerTitle: 'h1',
      mediumTitle: 'h2',
      smallTitle: 'h3',
      subtitle: 'subtitle',
      body: 'body',
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
