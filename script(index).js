var i = 0;
var txt1 =
  "Dear Menka, On this special day dedicated to expressing our love and affection, I want you to know just how much you mean to me. Your presence in my life brings endless joy and warmth, and I am grateful every day for the love we share. As we celebrate Propose Day, I want to take this opportunity to reaffirm my love for you and express my deepest feelings. You are my rock, my confidante, and my partner in every adventure. With you by my side, life feels complete, and I cherish every moment we spend together. Menka, will you continue to journey through life with me, hand in hand, sharing all its joys and challenges? I can't imagine a future without you, and I am eager to build a lifetime of beautiful memories together. Happy Propose Day, my love. Here's to us and the wonderful journey ahead. Forever yours <333333 Your own bf- SAMYAK";
var speed = 40;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}