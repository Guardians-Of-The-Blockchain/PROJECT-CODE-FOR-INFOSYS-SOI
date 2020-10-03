function testJS()
{

    var b = document.getElementById('qr-text').value,
        url = 'http://127.0.0.1:5000/?hash1=' + encodeURIComponent(b);

    document.location.href = url;
}


