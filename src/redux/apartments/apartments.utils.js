export function mapApartment(item) {
    const { city, street, house } = item.attributes.address
    const { title, area, unit, rooms } = item.attributes
    return {
        id: item.id,
        title,
        address: `${city} ${street}, ${house}`,
        area: `${area} ${unit}`,
        rooms,
        isLiked: false
    };
}

export function likeApartment(apartments, id) {
    return apartments.map(item =>
        item.id === id
            ? { ...item, isLiked: true }
            : item)
}

export function unlikeApartment(apartments, id) {
    return apartments.map(item =>
        item.id === id
            ? { ...item, isLiked: false }
            : item)
}

