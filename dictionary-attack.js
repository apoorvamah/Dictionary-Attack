var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */
function checkPassword(inputtxt) {
    //match Password with all words in the dictionary-attack.txt
if(inputtxt.value.match(wordsList))
{
alert('Your password is too weak. Please find another one!')
return true;
}
else
{
alert('Your password is strong! Congratulations...A++')
return false;
}
}

init();
checkPassword()
