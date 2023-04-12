import { InputHTMLAttributes, useState } from 'react'
import * as Style from './styles'

export type TextFieldProps = {
  label?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  placeholder?: string
  initialValue?: string
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  icon,
  placeholder,
  iconPosition = 'right',
  initialValue = '',
  onInputChange,
  name,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <Style.Wrapper>
      {!!label && <Style.Label htmlFor={name}>{label}</Style.Label>}

      <Style.InputWraper>
        {!!icon && <Style.Icon iconPosition={iconPosition}>{icon}</Style.Icon>}
        <Style.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          name={name}
          placeholder={placeholder}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </Style.InputWraper>
    </Style.Wrapper>
  )
}

export default TextField
