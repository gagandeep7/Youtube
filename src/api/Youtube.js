import axios from 'axios';

// here write your own key to proceed
const KEY = ''   ;

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