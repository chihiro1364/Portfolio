let tax = document.querySelector(".tax");
let seco = document.getElementById("seco");
tax.addEventListener("click", function() {
    seco.textContent = "二つ目のキーワードは「Free」です。合わせたワードをメールで送信すれば税抜き額で承ります。";
});
