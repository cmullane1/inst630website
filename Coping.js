var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent4 = '';
    for (var i =0; i < responseObject.Coping.length; i++) { // Loop through object
      newContent4 = newContent4 + '<p class="tips">';
      newContent4 += '<b>Tip:</b> ';
      newContent4 += responseObject.Coping[i].Tip;
      newContent4 += '<br/>';
      newContent4 += '<b>Post Content:</b> ';
      newContent4 += responseObject.Coping[i].FullPost;
      newContent4 += '<br/>';
      newContent4 += '<b>Author:</b> ';
      newContent4 += responseObject.Coping[i].Author;
      newContent4 += '<br/>';
      newContent4 += '<b>URL:</b> <a href="';
      newContent4 += responseObject.Coping[i].URL;
      newContent4 += '">';
      newContent4 += responseObject.Coping[i].URL;
      newContent4 += '</a></p>';
    }   
     
            document.getElementById('Coping').innerHTML = newContent4;
  }
};

xhr.open ('GET', 'js/data_for_project-2.json', true);
xhr.send(null);
