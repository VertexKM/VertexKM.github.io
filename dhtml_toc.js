// Functions for TOC
// ...\NewData\Templates\HTML No Frames\dhtml_toc.js

function exp(id) {
  console.log('dhtml_toc.js - exp('+id+') called.');
  var myElt=document.getElementById('p'+id);

  if (myElt) {
    // check current display state
    if (myElt.src.slice(myElt.src.lastIndexOf('/')+1) == 'minus.gif') {
      console.log('myElt: '+myElt+' equals minus.gif');
      collapse(id);
    } else{
      console.log('myElt: '+myElt+' !equal minus.gif');
      expand(id);
    }
  }
}

function expand(id) {
  console.log('dhtml_toc.js - expand() called.');
  var myDoc= document; //top.TOC.document;
  var myElt=myDoc.getElementById('s'+id); //myDoc.getElementById('s'+id);

  if (myElt) {
    with(myElt) {
      className='sp'; // originally - className='x'; MAKES NO SENSE. SHOULD BE 'sp'.
      style.display=''; 
    }
    myDoc.getElementById('p'+id).src='minus.gif';
    myDoc.getElementById('b'+id).src='obook.gif';
  }
}

function collapse(id) {
  var myElt=document.getElementById('s'+id);

  if (myElt) {
    with(myElt) {
      className='sp'; // originally - className='x'; MAKES NO SENSE. SHOULD BE 'sp'.
      style.display='none'; 
    }
    document.getElementById('p'+id).src='plus.gif';
    document.getElementById('b'+id).src='cbook.gif';
  }
}

function highlight(id) {
  var myElt= document.getElementById('a'+id); //top.TOC.document.getElementById('a'+id);

  if (myElt) {
    myElt.hideFocus=true;
    //myElt.focus();
    //myElt.setActive();
    //top.TOC.scrollTo(myElt.offsetLeft-48, myElt.offsetTop-(top.TOC.document.body.clientHeight/3));
    //document.scrollTo(myElt.offsetLeft-48, myElt.offsetTop-(document.body.clientHeight/3));
  }
}


function isTOCLoaded() { // forced to return true as AIT hardcodes this function onload of each topic's body
  console.log('isTOCLoaded() in dhtml_toc.js called; hard-coded to always return true.');
  return true;
}

