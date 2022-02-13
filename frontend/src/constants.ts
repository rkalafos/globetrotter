//constants file
const constants = {
    MIN_POPULAR_RATING: 4.0,
    SITE_DOMAIN: process.env.NODE_ENV === 'production' ? 'https://globe.trotter.com.s3-website-us-east-1.amazonaws.com' : 'http://localhost:3000'
}

export default constants