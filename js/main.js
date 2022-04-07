let taReview = document.getElementById('taReview');
let radiousLT = document.getElementById('radiousLT');
let radiousLB = document.getElementById('radiousLB');
let radiousRT = document.getElementById('radiousRT');
let radiousRB = document.getElementById('radiousRB');
let inputLT = document.getElementById('inputLT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let inputRT = document.getElementById('inputRT');
let allRadious = document.getElementById('allRadious');
let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');
let borderSolid = document.getElementById('borderSolid');
let borderDotted = document.getElementById('borderDotted');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let borderNone= document.getElementById('borderNone');
let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');
let inputAll = document.getElementById('inputAll');
let inputTop = document.getElementById('inputTop');
let inputRight = document.getElementById('inputRight');
let inputLeft = document.getElementById('inputLeft');
let inputBottom = document.getElementById('inputBottom');
let opacity1 = document.getElementById('opacity1')

var borde='';
radiousLT.oninput = function (e) {
    inputLT.value=radiousLT.value;
    if (allRadious.checked) 
    {
        taReview.style.borderRadius=radiousLT.value + 'px';
        inputRT.value=radiousLT.value;
        radiousRT.value= radiousLT.value;
        inputLB.value=radiousLT.value;
        radiousLB.value= radiousLT.value;
        inputRB.value=radiousLT.value;
        radiousRB.value= radiousLT.value;
    }
    else
    {
        taReview.style.borderTopLeftRadius=radiousLT.value + 'px';
    }

};

radiousRT.oninput= function (e)
{
    inputRT.value=radiousRT.value;
    taReview.style.borderTopRightRadius=radiousRT.value + 'px';
};

radiousLB.oninput = function (e)
{
    inputLB.value=radiousLB.value;
    taReview.style.borderBottomLeftRadius=radiousLB.value + 'px';
};

radiousRB.oninput = function (e)
{
    inputRB.value=radiousRB.value;
    taReview.style.borderBottomRightRadius=radiousRB.value + 'px';
};

allRadious.oninput = function (e) {
    if (!allRadious.checked) {
        taReview.style.borderRadius = '0px 0px 0px';
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0;
        radiousLB.value = 0;
        radiousRB.value = 0;
        radiousRT.value = 0;
    }
};

widthBorder.oninput = function (e) {
    taReview.style.borderWidth = widthBorder.value + 'px';
};

border1.onclick = function (e) {
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
};

borderSolid.onclick = function (e) {
    taReview.style.borderStyle = 'solid';
    borde = 'solid';
};

borderDotted.onclick = function (e) {
    taReview.style.borderStyle = 'dotted';
    borde = 'dotted';
};

borderDashed.onclick = function (e) {
    taReview.style.borderStyle = 'dashed';
    borde = 'dashed';
};

borderDouble.onclick = function (e) {
    taReview.style.borderStyle = 'double';
    borde = 'double';
};

borderGroove.onclick = function (e) {
    taReview.style.borderStyle = 'groove';
    borde = 'groove';
};

borderRidge.onclick = function (e) {
    taReview.style.borderStyle = 'ridge';
    borde = 'ridge';
};

borderInset.onclick = function (e) {
    taReview.style.borderStyle = 'inset';
    borde = 'inset';
};

borderOutset.onclick = function (e) {
    taReview.style.borderStyle = 'outset';
    borde = 'outset';
};

borderHidden.onclick = function (e) {
   taReview.style.borderStyle = 'hidden';
   borde ='hidden';
};

borderNone.onclick = function (e) {
    taReview.style.borderStyle = 'none';
    borde = 'none';
 };

borderColor.oninput = function (e) {
    taReview.style.borderColor = borderColor.value;
};

inputAll.onclick = function (e) {
    taReview.style.borderStyle=borde; 
};

inputTop.onclick = function (e) {
    taReview.style.borderStyle ="hidden";
    taReview.style.borderTopStyle = borde;
};

inputLeft.onclick = function (e) {
    taReview.style.borderStyle ="hidden";
    taReview.style.borderLeftStyle = borde;
};

inputRight.onclick = function (e) {
    taReview.style.borderStyle ="hidden";
    taReview.style.borderRightStyle = borde;
 };

inputBottom.onclick = function (e) {
    taReview.style.borderStyle ="hidden";
    taReview.style.borderBottomStyle = borde;
};

alphaBorder.oninput = function (e) {
    /* taReview.style.opacity = alphaBorder.value / 100; */
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+alphaBorder.value/100+")";
};

opacity1.onclick = function (e) {
    alphaBorder.value=100;
    taReview.style.borderColor=borderColor.value;
};