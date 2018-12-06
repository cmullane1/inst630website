var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);


      var newContent2 = '';
      for (var i =0; i < responseObject.Relationships.length; i++) { // Loop through object
      newContent2 = newContent2 + '<p class="tips">';
      newContent2 += '<b>Tip:</b> ';
      newContent2 += responseObject.Relationships[i].Tip;
      newContent2 += '<br/>';
      newContent2 += '<b>Post Content:</b> ';
      newContent2 += responseObject.Relationships[i].FullPost;
      newContent2 += '<br/>';
      newContent2 += '<b>Author:</b> ';
      newContent2 += responseObject.Relationships[i].Author;
      newContent2 += '<br/>';
      newContent2 += '<b>URL:</b> <a href="';
      newContent2 += responseObject.Relationships[i].URL;
      newContent2 += '">';
      newContent2 += responseObject.Relationships[i].URL;
      newContent2 += '</a></p>';
    }
 
            document.getElementById('Relationships').innerHTML = newContent2;
  }
};

xhr.open ('GET', 'js/data_for_project-2.json', true);
xhr.send(null);
