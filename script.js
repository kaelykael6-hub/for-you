const message = `I don’t even know if you’ll ever read this But if you do..I just want you to know,I still think about you sometimes We both tried We both cared.But the universe just never gave us enough space to become “us" I know you're probably not excited to talk to me. Maybe I did something wrong, and if I did, I'm sorry I hope you're okay. I hope you're happy.`;
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}