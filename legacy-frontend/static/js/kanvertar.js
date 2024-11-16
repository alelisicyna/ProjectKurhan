function copy_to_clipboard(id) {
    var text = document.getElementById(id).innerHTML;
    navigator.clipboard.writeText(text);
    document.getElementById("copy").innerHTML="СКАПІЯВАНА!";
    setTimeout(function() {
        document.getElementById("copy").innerHTML="СКАПІЯВАЦЬ";
    }, 2000);
};