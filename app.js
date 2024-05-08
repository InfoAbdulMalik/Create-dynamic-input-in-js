var btn=document.getElementById('btn');
btn.onclick= function (){
    var input= document.createElement('input');
     input.type='text';
    var h1= document.createElement('h1');
        h1.innerHTML= input.value;
        input.placeholder='enter your value';
     var divValue= document.getElementById('card');
     divValue.prepend(input)
}
 