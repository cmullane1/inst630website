var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

	  var x = '';
	  var newContent2 = '';
      var newContent2 = [];
      var newContentWithTags = [];
      var Tips2 = [];
      var Diary2 = [];
      var URL2 = [];
      var Author2 = [];
      for (var i =0; i < responseObject.Relationships.length; i++) { // Loop through object
      newContent2[i] = '';
      newContent2[i] += '<b>Tips: </b>' + responseObject.Relationships[i].Tip + '</br>';
      newContentWithTags[i] = '<p class="tips" id="' + i + '">' + newContent2[i] + '</p>' + '</br>';
   	  x += newContentWithTags [i];
   	  Diary2[i] += '<b></br>Post Content:</b> ' + responseObject.Relationships[i].FullPost + '</br>';
      Author2[i] += '<b></br>Author: </b> ' + responseObject.Relationships[i].Author + '</br>';
      URL2[i] += '<b></br>URL: </b>' + responseObject.Relationships[i].URL + '</br>';
    }

    $('div')[0].innerHTML = x;
 
    $('.tips').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary2[thisIndex] + Author2[thisIndex] + URL2[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent2[thisIndex]);
    });
 
           
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);