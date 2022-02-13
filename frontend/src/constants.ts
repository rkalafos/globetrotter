//constants file
const constants = {
    MIN_POPULAR_RATING: 4.0,
    SITE_DOMAIN: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
}

export default constants