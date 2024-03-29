import { useEffect, useState } from 'react'

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false)
  const downHandler = (event: KeyboardEvent): void => {
    if (event.key === targetKey) {
      setKeyPressed(true)
    }
  }
  const upHandler = (event: KeyboardEvent): void => {
    if (event.key === targetKey) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
  return keyPressed
}

export default useKeyPress
