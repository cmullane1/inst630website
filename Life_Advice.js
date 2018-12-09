var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var x = '';
    var newContent3 = '';
    var newContent3 = [];
    var newContentWithTags = [];
    var Tips3 = [];
    var Diary3 = [];
    var URL3 = [];
    var Author3 = [];
    for (var i =0; i < responseObject.Life_Advice.length; i++) { // Loop through object
      newContent3[i] = '';
      newContent3[i] += '<b>Tips: </b>' + responseObject.Life_Advice[i].Tip + '</br>';
      newContentWithTags[i] = '<p class="tips" id="' + i + '">' + newContent3[i] + '</p>' + '</br>';
   	  x += newContentWithTags [i];
   	  Diary3[i] += '<b></br>Post Content:</b> ' + responseObject.Life_Advice[i].FullPost + '</br>';
      Author3[i] += '<b></br>Author: </b> ' + responseObject.Life_Advice[i].Author + '</br>';
      URL3[i] += '<b></br>URL: </b>' + responseObject.Life_Advice[i].URL + '</br>';
    }

    $('#Life_Advice3')[0].innerHTML = x;
 
    $('.tips').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary3[thisIndex] + Author3[thisIndex] + URL3[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent3[thisIndex]);
    });
 
           
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);
