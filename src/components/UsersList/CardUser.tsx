import { Image, Row, Text } from 'components'

export interface User {
  id: string | number
  avatar: string
  name: string
  nac: string
  email: string
}

export type CardUserProps = {
  user: User
}

const CardUser = ({
  user: { id, avatar, name, nac, email }
}: CardUserProps) => {
  return (
    <Row
      key={id}
      bg="secondary"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p={10}
      borderRadius="8px"
      my="5px"
      flexDirection={['column', 'column', 'row']}
      gap="1rem"
    >
      <Row alignItems="center" flexDirection={['column', 'column', 'row']}>
        <Image
          src={avatar}
          alt="alt"
          width={['10rem', '12rem', '8rem']}
          height={['10rem', '12rem', '8rem']}
          borderRadius="10rem"
        />
        <Text ml={[0, 0, 10]}>{name}</Text>
      </Row>
      <div>{nac}</div>
      <div>{email}</div>
    </Row>
  )
}

export default CardUser
