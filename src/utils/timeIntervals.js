import differenceInYears from 'date-fns/differenceInYears'
import differenceInMonths from 'date-fns/differenceInMonths'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import addMonths from 'date-fns/addMonths'
import sortBy from 'lodash/sortBy'
import keys from 'lodash/keys'

const getIntervalOfEvent = event => {
  const start = format(new Date(event.dateStart), 'MMM yyyy')
  const end =
    event.dateEnd === null
      ? 'present'
      : format(new Date(event.dateEnd), 'MMM yyyy')
  return `${start} - ${end}`
}

const getFullEventTimeCount = events => {
  return Math.ceil(
    events.reduce((count, event) => {
      const start = new Date(event.dateStart)
      const end = addMonths(event.dateEnd ? new Date(event.dateEnd) : new Date(), 1)
      return count + differenceInMonths(end, start)
    }, 0) / 12
  )
}

const getCountOfEvent = event => {
  let count = ''
  const start = new Date(event.dateStart)
  const end = addMonths(event.dateEnd ? new Date(event.dateEnd) : new Date(), 1)

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

const groupByYear = items => {
  const groups = {}
  items.forEach(item => {
    const dateStr = item.date
    const date =
      dateStr.indexOf('-') !== -1
        ? parse(dateStr, 'yyyy-MM-dd', new Date())
        : parse(dateStr, 'dd.MM.yyyy', new Date())
    const year = date.getFullYear()
    if (groups[year]) {
      groups[year].push(item)
    } else {
      groups[year] = [item]
    }
  })
  const years = sortBy(keys(groups), year => -year)
  return years.map(year => ({
    label: year,
    items: groups[year],
  }))
}

export {
  getIntervalOfEvent,
  getFullEventTimeCount,
  getCountOfEvent,
  groupByYear,
}
