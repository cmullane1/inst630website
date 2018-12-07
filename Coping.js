var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var x = '';
    var newContent4 = '';
    var newContent4 = [];
    var newContentWithTags = [];
    var Tips4 = [];
    var Diary4 = [];
    var URL4 = [];
    var Author4 = [];
    for (var i =0; i < responseObject.Coping.length; i++) { // Loop through object
      newContent4[i] = '';
      newContent4[i] += '<b>Tips: </b>' + responseObject.Coping[i].Tip + '</br>';
      newContentWithTags[i] = '<p class="tips" id="' + i + '">' + newContent4[i] + '</p>' + '</br>';
   	  x += newContentWithTags [i];
   	  Diary4[i] += '<b></br>Post Content:</b> ' + responseObject.Coping[i].FullPost + '</br>';
      Author4[i] += '<b></br>Author: </b> ' + responseObject.Coping[i].Author + '</br>';
      URL4[i] += '<b></br>URL: </b>' + responseObject.Coping[i].URL + '</br>';
    }

    $('div')[0].innerHTML = x;
 
    $('.tips').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary4[thisIndex] + Author4[thisIndex] + URL4[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent4[thisIndex]);
    });
 
           
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);
