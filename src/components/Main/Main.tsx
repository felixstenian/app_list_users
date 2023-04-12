import { FiSearch } from 'react-icons/fi'

import { Header, Row, Text, TextField } from 'components'

import * as Style from './styles'

const Main = () => {
  const list = [
    {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Genésia',
      nac: 'Brazil',
      email: 'genesia.barbosa@example.com'
    },
    {
      id: 2,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Genésia',
      nac: 'Brazil',
      email: 'genesia.barbosa@example.com'
    },
    {
      id: 3,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Genésia',
      nac: 'Brazil',
      email: 'genesia.barbosa@example.com'
    }
  ]
  return (
    <Style.Wrapper>
      <Header>LOGO</Header>

      <Row
        mt={20}
        width="100%"
        maxWidth="100rem"
        justifyContent="space-around"
        alignItems="center"
        m="5rem auto"
        // bg={['secondary', 'primary', 'mainBg']}
        flexDirection={['column', 'column', 'row']}
      >
        <Row>
          <TextField placeholder="Pesquisar" icon={<FiSearch />} />
        </Row>

        <Row alignItems="center">
          <Text>Filtrar por:</Text>
          <Text variant="caption">Nacionalidade</Text>
          <select />
          <Text variant="caption">Genero</Text>
          <select />
        </Row>
      </Row>

      <Row width="100%" maxWidth="100rem" m="10rem auto" flexDirection="column">
        {list.map((user) => (
          <Row
            key={user.id}
            bg="#fafa"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            p={10}
            borderRadius="8px"
            my="5px"
            flexDirection={['column', 'column', 'row']}
          >
            <Row alignItems="center">
              <figure>
                <img
                  width="50%"
                  style={{
                    borderRadius: '50px'
                  }}
                  src={`${user.avatar}`}
                  alt="alt"
                />
              </figure>
              <div>{user.name}</div>
            </Row>
            <div>{user.nac}</div>
            <div>{user.email}</div>
          </Row>
        ))}
      </Row>
    </Style.Wrapper>
  )
}

export default Main
