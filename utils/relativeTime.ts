import formatDistance from 'date-fns/formatDistance'

function relativeTime(date: Date): string {
  return `${formatDistance(Date.now(), date)} ago`
}

export default relativeTime
