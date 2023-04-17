import Link from 'next/link'
import { GrMapLocation } from 'react-icons/gr'

import { Image, Modal, Row, Text } from 'components'
import { formatIsoStringToDateString } from 'shared/helpers'
import { User } from 'shared/types'

import * as Styled from './styles'

export type ModalUserDetailsProps = {
  userData: User
  open: boolean
  onClose: () => void
}

const ModalUserDetails = ({
  userData,
  open,
  onClose
}: ModalUserDetailsProps) => {
  return (
    <Modal
      open={open}
      hasCloseIcon
      onClose={onClose}
      width={['40rem', '40rem', '80rem']}
      height={['65rem', '67rem', '60rem']}
      m={[2, 2, 30]}
      overflowY="auto"
    >
      <Row alignItems="center" flexDirection="column" gap="1rem">
        <Row flexDirection="column" flexWrap="wrap" alignItems="center">
          <Image
            src={userData?.picture?.large}
            alt="alt"
            width="15rem"
            borderRadius="10rem"
          />
          <Row mt={2}>
            <Text variant="body" mr={2}>
              {userData?.name?.title}
            </Text>
            <Text variant="biggerTitle">{`${userData?.name?.first} ${userData?.name?.last}`}</Text>
          </Row>
        </Row>

        <Styled.Divider>
          <Text variant="mediumTitle">Dados</Text>
        </Styled.Divider>

        <Row gap={['2rem', '2rem', '8rem']} flexWrap="wrap">
          <Styled.Column>
            <Text variant="body">Email:</Text>
            <Text variant="mediumTitle">{userData?.email}</Text>
          </Styled.Column>

          <Styled.Column>
            <Text variant="body">Data de Nascimento:</Text>
            <Text variant="mediumTitle">
              {formatIsoStringToDateString(userData?.dob?.date)}
            </Text>
          </Styled.Column>
          <Styled.Column>
            <Text variant="body">Idade:</Text>
            <Text variant="mediumTitle">{userData?.dob?.age}</Text>
          </Styled.Column>
        </Row>

        <Row gap={['2rem', '2rem', '8rem']} flexWrap="wrap">
          <Styled.Column>
            <Text variant="body">Telefone:</Text>
            <Text variant="mediumTitle">{userData?.phone}</Text>
          </Styled.Column>
          <Styled.Column>
            <Text variant="body">Celular:</Text>
            <Text variant="mediumTitle">{userData?.cell}</Text>
          </Styled.Column>
          <Styled.Column>
            <Text variant="body">Data de registro:</Text>
            <Text variant="mediumTitle">
              {formatIsoStringToDateString(userData?.registered?.date)}
            </Text>
          </Styled.Column>
        </Row>

        <Styled.Divider>
          <Text variant="mediumTitle">Endereço</Text>
        </Styled.Divider>

        <Row gap={['2rem', '2rem', '8rem']} flexWrap="wrap">
          <Styled.Column>
            <Text variant="body">País:</Text>
            <Text variant="mediumTitle">{userData?.location?.country}</Text>
          </Styled.Column>
          <Styled.Column>
            <Text variant="body">Estado:</Text>
            <Text variant="mediumTitle">{userData?.location?.state}</Text>
          </Styled.Column>
          <Styled.Column>
            <Text variant="body">Cidade:</Text>
            <Text variant="mediumTitle">{userData?.location?.city}</Text>
          </Styled.Column>
        </Row>

        <Row gap={['2rem', '2rem', '8rem']} flexWrap="wrap">
          <Styled.Column>
            <Text variant="body">Rua:</Text>
            <Text variant="mediumTitle">
              {`${userData?.location?.street?.name}, ${userData?.location?.street?.number}`}
            </Text>
          </Styled.Column>
          <Row
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
          >
            <Link
              passHref
              href={`https://www.google.com/maps/search/?api=1&query=${parseFloat(
                userData?.location?.coordinates?.latitude
              )},${parseFloat(userData?.location?.coordinates?.longitude)}
`}
            >
              <a target="_blank" rel="noopener noreferrer">
                <GrMapLocation size={28} color="#fafa" />
              </a>
            </Link>
          </Row>
        </Row>
      </Row>
    </Modal>
  )
}

export default ModalUserDetails
