import { RefObject, useEffect } from 'react'

const MOUSEDOWN = 'mousedown'
const TOUCHSTART = 'touchstart'

type Event = TouchEvent | MouseEvent

const useOnClickOutside = (
  handler: (event: Event) => void,
  ...refs: RefObject<unknown>[]
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (refs.length > 0) {
        const needToHandle = refs.filter(
          (ref) =>
            !ref.current ||
            (ref.current as HTMLElement).contains(event.target as Node)
        )
        if (needToHandle.length !== 0) return

        return handler(event)
      }
    }

    document.addEventListener(MOUSEDOWN, listener)
    document.addEventListener(TOUCHSTART, listener)

    return () => {
      document.removeEventListener(MOUSEDOWN, listener)
      document.removeEventListener(TOUCHSTART, listener)
    }
  }, [refs, handler])
}

export default useOnClickOutside
