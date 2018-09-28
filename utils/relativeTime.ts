import distanceInWords from 'date-fns/distance_in_words'

const relativeTime = (date: Date) => `${distanceInWords(Date.now(), date)} ago`

export default relativeTime
