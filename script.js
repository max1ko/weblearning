function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchI");
    filter = input.value.toUpperCase();
    ul = document.getElementById("sul");
    li = document.getElementsByClassName("sli");
    document.getElementById("sdiv").style.display = "block";
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        if (i==li.length && txtValue=="") {
            document.getElementById("sdiv").style.display = "none";
        }
    }
}
function clearS() {
    document.getElementById("searchI").value = "";
    document.getElementById("sdiv").style.display = "none";
}