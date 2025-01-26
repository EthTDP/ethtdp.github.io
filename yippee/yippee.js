function continueToWhere() {
    var confirmDate = confirm("CONTINUE TO PICK WHERE!!");

    if(confirmDate) {
        window.location.href = "../where/where.html";
    } else
    {
        alert("AWW MAN WHAT THE HECK!");
    }
}