import differenceInYears from 'date-fns/differenceInYears'
import differenceInMonths from 'date-fns/differenceInMonths'
import format from 'date-fns/format'
import addMonths from 'date-fns/addMonths'

const getIntervalOfEvent = event => {
  const start = format(new Date(...event.dateStart), 'MMM yyyy')
  const end =
    event.dateEnd.length === 0
      ? 'present'
      : format(new Date(...event.dateEnd), 'MMM yyyy')
  return `${start} - ${end}`
}

const getFullEventTimeCount = events => {
  return Math.ceil(
    events.reduce((count, event) => {
      const start = new Date(...event.dateStart)
      const end = addMonths(new Date(...event.dateEnd), 1)
      return count + differenceInMonths(end, start)
    }, 0) / 12
  )
}

const getCountOfEvent = event => {
  let count = ''
  const start = new Date(...event.dateStart)
  const end = addMonths(new Date(...event.dateEnd), 1)

  const years = differenceInYears(end, start)
  const months = differenceInMonths(end, start) % 12

  count =
    years !== 0 ? `${years.toString()} yr${years === 1 ? '' : 's'}` : count
  count =
    months !== 0
      ? `${count ? `${count} ` : ''}${months.toString()} mo${
          months === 1 ? '' : 's'
        }`
      : count
  return count
}

export { getIntervalOfEvent, getFullEventTimeCount, getCountOfEvent }
