var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent1 = '';
    for (var i =0; i < responseObject.Life_Advice.length; i++) { // Loop through object
      newContent1 = newContent1 + '<p class="tips">';
      newContent1 += '<b>Tip:</b> ';
      newContent1 += responseObject.Life_Advice[i].Tip;
      newContent1 += '<br/>';
      newContent1 += '<b>Post Content:</b> ';
      newContent1 += responseObject.Life_Advice[i].FullPost;
      newContent1 += '<br/>';
      newContent1 += '<b>Author:</b> ';
      newContent1 += responseObject.Life_Advice[i].Author;
      newContent1 += '<br/>';
      newContent1 += '<b>URL:</b> <a href="';
      newContent1 += responseObject.Life_Advice[i].URL;
      newContent1 += '">';
      newContent1 += responseObject.Life_Advice[i].URL;
      newContent1 += '</a></p>';
    }

 
            document.getElementById('Life_Advice').innerHTML = newContent1;
  }
};

xhr.open ('GET', 'js/data_for_project-2.json', true);
xhr.send(null);


