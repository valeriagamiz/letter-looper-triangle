var looperLetter = prompt('Enter a letter!');

var letters;

var i;

for (letters = 0; letters < 10; letters++) {
  for (i = 0; i < letters; i++) {
    document.write(looperLetter);
  }
  document.write('<br>');
}
