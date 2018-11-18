export function build_query (obj, num_prefix, temp_key) {

    var output_string = []
  
    Object.keys(obj).forEach(function (val) {
  
      var key = val;
  
      num_prefix && !isNaN(key) ? key = num_prefix + key : ''
  
      var key = encodeURIComponent(key.replace(/[!'()*]/g, escape));
      temp_key ? key = temp_key + '[' + key + ']' : ''
  
      if (typeof obj[val] === 'object') {
        var query = build_query(obj[val], null, key)
        output_string.push(query)
      }
  
      else {
        var value = encodeURIComponent(obj[val].replace(/[!'()*]/g, escape));
        output_string.push(key + '=' + value)
      }
  
    })
  
    return output_string.join('&')
  
  }