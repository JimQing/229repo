import {request} from '../util/deliver.js'
import MD5 from '../util/md5.js';
import { build_query } from '../util/http_build_query.js';

const qqMapKey = '4IGBZ-QEHW3-ORE33-3HVCL-HE2NH-UMFF6';
const sk = 'rbTiZLsL5u1MzrQoSwBj1mrFPFAlmwPl';
const Map = {
    getMapLatOrLng(Param) {
        // console.log('/ws/geocoder/v1/?address=' + Param.address + '&key=' + qqMapKey + sk);
        // const sig = MD5.hex_md5('/ws/geocoder/v1/?' + decodeURI(build_query(Param)) + sk);
        // const sig = MD5.hex_md5('/ws/geocoder/v1/?address=' + Param.address + '&key=' + qqMapKey + sk);

        return request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?address='
                + Param.address + '&key=' + qqMapKey
        });
    },
    getSuggestion(Param) {
        return request({
            url: 'https://apis.map.qq.com/ws/place/v1/suggestion',
            data: {
                key: qqMapKey,
                ...Param
            }
        });
    },
    // location: lat,lng
    reverseLocal(location) {
        return request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/',
            data: {
                key: qqMapKey,
                location
            }
        });
    }
};

export default Map;
