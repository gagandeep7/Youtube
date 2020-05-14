import axios from 'axios';

const KEY = 'AIzaSyDd2CithQ_NWcqtovjVRiramJfTmbi18B0'   ;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'id,snippet',
        maxResults : 10,
        key : KEY,
        type : 'video',
        order : 'date'

    }
})