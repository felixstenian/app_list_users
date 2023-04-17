import { useState } from 'react'

import { Image, ModalUserDetails, Row, Text } from 'components'
import { User } from 'shared/types'

export type CardUserProps = {
  userData: User
}

const CardUser = ({ userData }: CardUserProps) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  const displayDataUser = () => setOpenProfile(true)
  const onCloseUserDetails = () => setOpenProfile(false)

  return (
    <>
      {openProfile && (
        <ModalUserDetails
          userData={userData}
          open={openProfile}
          onClose={onCloseUserDetails}
        />
      )}
      <Row
        key={userData?.login?.uuid}
        bg="secondary"
        width="80%"
        justifyContent="center"
        alignItems="center"
        p={10}
        borderRadius="8px"
        my="5px"
        gap="1rem"
        flexWrap="wrap"
        minWidth="32rem"
        as="a"
        onClick={displayDataUser}
        cursor="pointer"
      >
        <Row
          alignItems="center"
          justifyContent={['center', 'flex-start', 'flex-start']}
          flex={1}
        >
          <Image
            src={userData?.picture?.large}
            alt="alt"
            width={['10rem', '12rem', '8rem']}
            height={['10rem', '12rem', '8rem']}
            borderRadius="10rem"
          />
          <Text ml={[30, 20, 20]} variant="mediumTitle">
            {userData?.name?.first}
          </Text>
        </Row>
        <Row
          flexWrap="wrap"
          justifyContent="center"
          gap={['4rem', '3rem', '5rem']}
        >
          <Text variant="subtitle">{userData?.location?.country}</Text>
          <Text>{userData?.email}</Text>
        </Row>
      </Row>
    </>
  )
}

export default CardUser
