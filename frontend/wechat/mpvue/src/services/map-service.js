import {request} from '../util/deliver.js'

const Map = {
    getMapLatOrLng(Param) {
        return request({
            url: 'https://jimqing.xin/map/getMapLatOrLng.do?address=' + Param.address
        });
    },
    getSuggestion(Param) {
        return request({
            url: 'https://jimqing.xin/map/getSuggestion.do?keyword=' + Param.keyword + '&region=' + Param.region 
        });
    },
    // location: lat,lng
    reverseLocal(location) {
        return request({
            url: 'https://jimqing.xin/map/reverseLocal.do?location=' + location
        });
    }
};

export default Map;
