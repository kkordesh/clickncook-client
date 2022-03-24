let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
    APIURL = 'http://localhost:4000';
    break;

    case 'clickncookclient.herokuapp.com':
    APIURL = "https://clickncookserver.herokuapp.com";
}

export default APIURL;