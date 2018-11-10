var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i =0; i < responseObject.Managing_Symptoms.length; i++) { // Loop through object
      newContent = newContent + '<p class="course">';
      newContent += '<b>Tip:</b> ';
      newContent += responseObject.Managing_Symptoms[i].Tip;
      newContent += '<br/>';
      newContent += '<b>Post Content:</b> ';
      newContent += responseObject.Managing_Symptoms[i].FullPost;
      newContent += '<br/>';
      newContent += '<b>Author:</b> ';
      newContent += responseObject.Managing_Symptoms[i].Author;
      newContent += '<br/>';
      newContent += '<b>URL:</b> <a href="';
      newContent += responseObject.Managing_Symptoms[i].URL;
      newContent += '">';
      newContent += responseObject.Managing_Symptoms[i].URL;
      newContent += '</a></p>';
    }
    document.getElementsByTagName('div')[0].innerHTML = newContent;
  }
};

xhr.open ('GET', 'data_for_project.json', true);
xhr.send(null);
