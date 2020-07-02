import Axios from 'axios';




const https = Axios.create({
    baseURL: 'https://covid19wst.yilab.org.np/api/v1',
    responseType: 'json'
})



function getHeaders(Secure = true) {
    let headers;
    if (Secure) {

        headers = {
            'content-Type': 'application/json',
            'Authorization': 'Token 44e2b23387334bcca310175463de768ee5c41743'
        }
    }
    return headers;
}

function get(url, isSecure) {
    return https.get(url, {
        headers: getHeaders(isSecure)
    })
}

export default {
    get

}