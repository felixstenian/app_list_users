import { InputHTMLAttributes, useState } from 'react'

import Row from 'components/Row/Row'
import Text from 'components/Text/Text'
import { LayoutProps } from 'styled-system'
import * as Style from './styles'

export type SelectionFieldProps = {
  label?: string
  placeholder?: string
  initialValue?: string
  options: string[]
} & InputHTMLAttributes<HTMLSelectElement> &
  LayoutProps

const SelectionField = ({
  label,
  placeholder,
  initialValue,
  name,
  options,
  ...props
}: SelectionFieldProps) => {
  const [selectedOption, setSelectedOption] = useState(
    initialValue || options[0]
  )

  return (
    <Row alignItems="center">
      {!!label && <Style.Label htmlFor={name}>{label}</Style.Label>}
      <Style.InputWraper>
        <Style.Input
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
          name={name}
          placeholder={placeholder}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options.map((option) => (
            <Style.Option key={option} value={option}>
              <Row>
                <Text>{option}</Text>
              </Row>
            </Style.Option>
          ))}
        </Style.Input>
      </Style.InputWraper>
    </Row>
  )
}

export default SelectionField
