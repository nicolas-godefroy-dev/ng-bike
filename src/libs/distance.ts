export type Coordinate = {
  latitude: number
  longitude: number
}

// Converts numeric degrees to radians
const toRad = (value: number) => {
  return (value * Math.PI) / 180
}

/**
 * Get distance in meters
 */
const distance = (coor1: Coordinate, coor2: Coordinate): number => {
  const R = 6371 // km
  const dLat = toRad(coor2.latitude - coor1.latitude)
  const dLon = toRad(coor2.longitude - coor1.longitude)
  const lat1 = toRad(coor1.latitude)
  const lat2 = toRad(coor2.latitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c

  return Math.round(d * 1000)
}

export { distance }
