import { useCallback, useEffect, useState } from 'react'

import {
  Header,
  Loading,
  Pagination,
  Row,
  SelectionField,
  Text,
  UsersList
} from 'components'

import SnackBar from 'components/Snackbar/Snackbar'
import { getUsers, useService } from 'services'
import { GENDERS, NATIONALITIES } from 'shared/helpers'
import { useSnackBar } from 'shared/hooks'
import { User } from 'shared/types'
import * as Style from './styles'

const Main = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedNationalitie, setSelectedNationalitie] = useState<string>()
  const [selectedGender, setSelectedGender] = useState<string>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { isOpen, message, showSnackBar, type } = useSnackBar()

  const getUsersService = useService(getUsers)

  const getAllUsers = useCallback(async () => {
    setIsLoading(true)
    try {
      const {
        data: { results }
      } = await getUsersService({
        params: {
          results: 5,
          page: currentPage,
          ...(!!selectedGender && { gender: selectedGender }),
          ...(!!selectedNationalitie && { nat: selectedNationalitie })
        }
      })
      setUsers(results)
    } catch {
      showSnackBar(
        'Error ao carregar dados. Tente novamente mais tarde.',
        'error'
      )
    } finally {
      setIsLoading(false)
    }
  }, [selectedGender, selectedNationalitie, currentPage])

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  const handleChangeNationalities = (value: string) => {
    setSelectedNationalitie(value)
  }

  const handleChangeGender = (value: string) => {
    setSelectedGender(value)
  }

  if (!users.length && isLoading) {
    return <Loading />
  }

  return (
    <Style.Wrapper>
      <Header>LOGO</Header>
      <SnackBar message={message} type={type} isOpen={isOpen} />
      <Row
        mt={20}
        width="100%"
        maxWidth="100rem"
        justifyContent="space-around"
        alignItems="center"
        m="5rem auto"
        flexDirection={['column', 'column', 'row']}
        data-testid="main-page"
      >
        <Row
          alignItems={['flex-start', 'flex-start', 'center']}
          border="1px solid"
          borderColor="mainBg"
          borderRadius="8px"
          p={1}
          flexDirection={['column', 'column', 'row']}
          minWidth="30rem"
        >
          <Text variant="smallTitle" mr={2}>
            Filtrar por
          </Text>
          <Row>
            <SelectionField
              value={selectedNationalitie!}
              onAction={handleChangeNationalities}
              options={NATIONALITIES}
              label="Nacionalidade:"
              width="20rem"
            />
          </Row>
          <Row mt={[2, 2, 0]}>
            <SelectionField
              value={selectedGender!}
              options={GENDERS}
              onAction={handleChangeGender}
              label="Genero:"
              width="18rem"
            />
          </Row>
        </Row>
      </Row>

      <Row width="100%" maxWidth="100rem" m="5rem auto" flexDirection="column">
        {!users.length ? (
          <Row alignItems="center" justifyContent="center" my="20rem">
            <Text variant="mediumTitle">Sem dados !</Text>
          </Row>
        ) : (
          <>
            <UsersList listUsers={users} />
            <Row justifyContent="center" my={20}>
              <Pagination
                onPageChange={setCurrentPage}
                currentPage={currentPage}
              />
            </Row>
          </>
        )}
      </Row>
    </Style.Wrapper>
  )
}

export default Main
