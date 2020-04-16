/**************************
* 'vertex.js'
**************************/

 function init() { // called once toc is loaded successfully

	//Reset tree to all close
    $('.sp').css('display','none');
    $('img[src="obook.gif"]').attr('src','cbook.gif');
    $('img[src="minus.gif"]').attr('src','plus.gif');

    //Get selected via url
    var selectedUrl = window.location.pathname.split('.')[0].split('/')[2];
    var selectedItem = $('a[href="'+selectedUrl+'.htm"]');

    var checkParent = selectedItem;
    //Iterate on parents an open all elements
    while($(checkParent).parent().hasClass('sp')==true){
        checkParent = $(checkParent).parent();
        $(checkParent).css('display','block');
        var newId = $(checkParent).attr('id').substr(1);
        $('#b'+newId).attr('src','obook.gif');
        $('#p'+newId).attr('src','minus.gif');
    };
		
	// Set the current page's corresponding TOC entry to an active style
	var a_href = window.location.href; // stores the full url
	var filename = a_href.substring(a_href.lastIndexOf('/')+1); // parses to just the page/filename ('ve_overview.htm')
	//activeTopic = $('#toc-container a[href="'+filename+'"]'); // sets activeTopic var to the toc object where filename equals href
	var filenameEncoded = encodeURIComponent(filename); // encodes to prevent XSS vulnerabilities
    activeTopic = $(('#toc-container a[href="'+filenameEncoded+'"]')); // sets activeTopic var to the toc object where filenameEncoded equals href
	setActiveLinkStyle(activeTopic); // passes toc object to be styled


    $('#toc-container a').click(function(e) { // Override default toc.htm link behavior
    	clearActiveLinkStyle(); // clear the background-color of the previously 'active' toc link
    	activeTopic = $(this); // set the new activeTopic
    	setActiveLinkStyle(activeTopic); // set the style of the selected topic
	});

	if (sessionStorage.scrollTop != "undefined") { // reads the toc-container scroll value stored previously and sets scrollbar to it
    	$('#toc-container').scrollTop(sessionStorage.scrollTop);
	};

	// append the pathname to the survey url query string
	var url = 'https://vertexinc.co1.qualtrics.com/jfe/form/SV_3JJ80LWsExAasPH?topic=' + topicID; //topicID is inserted as var in <head> by AIT at publish
	console.log('js file - topicID: '+ url);
	document.getElementById("surveyform").setAttribute("src", url);

};

function setActiveLinkStyle(activeTopic) { // set the activeTopic's toc link style
	console.log('setActiveLinkStyle activeTopic param: ' + activeTopic);
	 $(activeTopic).css("background-color", "blue"); // with page now loaded, set the currently selected toc link background-color
	 $(activeTopic).css("color", "#ffffff"); // set the currently selected toc link color
};

function clearActiveLinkStyle(activeTopic) { // clears the styles of the object that is passed to it
	$(activeTopic).css("background-color", "");
	$(activeTopic).css("color", "");

};

$('#toc-container').scroll(function() { // stores the y scroll position of the TOC to keep during reload
  sessionStorage.scrollTop = $('#toc-container').scrollTop();
});


function expandTOC() { // expands all topics in toc
	console.log('expandTOC() called...');
	$(".sp").css("display", "");
}

function collapseTOC() { // collapses all topics in toc
	console.log('collapseTOC() called...');
	$(".sp").css("display", "none");
}