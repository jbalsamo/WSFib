function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
  
window.onload = function() {
    //get a reference to the element
    var myBtn = document.getElementById('compfib');

    //add event listener
    myBtn.addEventListener('click', function(event) {
        var myform = document.getElementById('fibnum');
        var result = document.getElementById('fibans');
        var answer = fibonacci(parseInt(myform.value));
        result.innerHTML = "Answer: "+answer.toString();
    });
}