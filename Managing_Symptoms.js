var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

	var x = '';
    var newContent1 = '';
    var newContent1 = [];
    var newContentWithTags = [];
    var Tips1 = [];
    var Diary1 = [];
    var URL1 = [];
    var Author1 = [];
    for (var i =0; i < responseObject.Managing_Symptoms.length; i++) { // Loop through object
      newContent1[i] = '';
      newContent1[i] += '<b>Tips: </b>' + responseObject.Managing_Symptoms[i].Tip + '</br>';
      newContentWithTags[i] = '<p class="tips" id="' + i + '">' + newContent1[i] + '</p>' + '</br>';
   	  x += newContentWithTags [i];
   	  Diary1[i] += '<b></br>Post Content:</b> ' + responseObject.Managing_Symptoms[i].FullPost + '</br>';
      Author1[i] += '<b></br>Author: </b> ' + responseObject.Managing_Symptoms[i].Author + '</br>';
      URL1[i] += '<b></br>URL: </b>' + responseObject.Managing_Symptoms[i].URL + '</br>';
    }

    $('div')[0].innerHTML = x;
 
    $('.tips').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary1[thisIndex] + Author1[thisIndex] + URL1[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent1[thisIndex]);
    });
 
           
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);
