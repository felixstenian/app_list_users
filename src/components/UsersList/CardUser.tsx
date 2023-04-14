import { Image, Row, Text } from 'components'

export interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string | number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string | null
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

export type CardUserProps = {
  userData: User
}

const CardUser = ({ userData }: CardUserProps) => {
  return (
    <Row
      key={userData.login.uuid}
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
          src={userData?.picture?.large}
          alt="alt"
          width={['10rem', '12rem', '8rem']}
          height={['10rem', '12rem', '8rem']}
          borderRadius="10rem"
        />
        <Text ml={[0, 0, 10]}>{userData?.name?.first}</Text>
      </Row>
      <div>{userData?.location?.country}</div>
      <div>{userData?.email}</div>
    </Row>
  )
}

export default CardUser
