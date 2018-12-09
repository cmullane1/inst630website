var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var x = '';
    var newContent5 = '';
    var newContent5 = [];
    var newContentWithTags = [];
    var Tips5 = [];
    var Diary5 = [];
    var URL5 = [];
    var Author5 = [];
    for (var i =0; i < responseObject.Advocacy.length; i++) { // Loop through object
      newContent5[i] = '';
      newContent5[i] += '<b>Tips: </b>' + responseObject.Advocacy[i].Tip + '</br>';
      newContentWithTags[i] = '<p class="tips" id="' + i + '">' + newContent5[i] + '</p>' + '</br>';
   	  x += newContentWithTags [i];
   	  Diary5[i] += '<b></br>Post Content:</b> ' + responseObject.Advocacy[i].FullPost + '</br>';
      Author5[i] += '<b></br>Author: </b> ' + responseObject.Advocacy[i].Author + '</br>';
      URL5[i] += '<b></br>URL: </b>' + responseObject.Advocacy[i].URL + '</br>';
    }

    $('#Advocacy5')[0].innerHTML = x;
 
    $('.tips').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary5[thisIndex] + Author5[thisIndex] + URL5[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent5[thisIndex]);
    });
 
           
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);
