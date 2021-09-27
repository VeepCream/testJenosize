import _ from 'lodash'
import axios from 'axios'

export const searchPlace = (key) => {
    return axios({
        method: 'get',
        url: `/maps/api/place/textsearch/json`,
        baseURL: 'https://maps.googleapis.com',
        params: {
            query: key,
            region: "th",
            type: "restaurant",
            key: "AIzaSyDQehCm4XpXhSZvdCWJRNgwtnccHzuEvuw"
        }
    })
}