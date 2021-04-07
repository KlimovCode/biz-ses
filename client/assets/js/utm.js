$(document).ready(function(){
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    let city = ''
    let currentCity = getUrlParameter('utm')
    if(currentCity) {
        switch (currentCity) {
            case 'hb':
                city = 'Уничтожение вредителей в Хабаровском крае'
                break
            default: break
        }
        $('.intro__logo').text(city)
    }
});