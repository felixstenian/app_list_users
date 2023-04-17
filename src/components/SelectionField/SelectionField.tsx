import { InputHTMLAttributes } from 'react'

import Row from 'components/Row/Row'
import { LayoutProps } from 'styled-system'
import * as Style from './styles'

export type SelectionFieldProps = {
  label?: string
  placeholder?: string
  options: {
    label: string
    value: string
  }[]
  value?: string | number
  onAction: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLSelectElement>, 'width'> &
  LayoutProps

const SelectionField = ({
  label,
  placeholder,
  value,
  name,
  options,
  onAction,
  ...props
}: SelectionFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onAction(event.target.value)
  }

  return (
    <Row alignItems="center">
      {!!label && <Style.Label htmlFor={name}>{label}</Style.Label>}
      <Style.InputWraper>
        <Style.Input
          onChange={handleChange}
          value={value}
          name={name}
          placeholder={placeholder}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options?.map((option) => (
            <Style.Option key={option.label} value={option.value}>
              {option.label}
            </Style.Option>
          ))}
        </Style.Input>
      </Style.InputWraper>
    </Row>
  )
}

export default SelectionField
