import { addMinutes, format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const utcToLocal = (date: Date) => {
  const timeZoneOffset = date.getTimezoneOffset()
  return addMinutes(date, -timeZoneOffset)
}

export const formatIsoStringToDateString = (
  date: string,
  pattern = 'dd/MM/yyyy'
) => {
  if (!date) return ''

  const parsedDate = parseISO(date)
  const localDate = utcToLocal(parsedDate)
  const dateString = format(localDate, pattern, {
    locale: ptBR
  })

  return dateString
}
