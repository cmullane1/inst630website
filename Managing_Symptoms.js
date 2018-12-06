var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent1 = '';
    var Tips1 = [];
    var Diary1 = [];
    var URL1 = [];
    var Author1 = [];
    for (var i =0; i < responseObject.Managing_Symptoms.length; i++) { // Loop through object
      newContent1 = newContent1 + '<p class="tips">';
      newContent1 += '<b>Tip:</b> ';
      newContent1 += responseObject.Managing_Symptoms[i].Tip;
      newContent1 += '<br/>';
      newContent1 += '<b>Post Content:</b> ';
      newContent1 += responseObject.Managing_Symptoms[i].FullPost;
      newContent1 += '<br/>';
      newContent1 += '<b>Author:</b> ';
      newContent1 += responseObject.Managing_Symptoms[i].Author;
      newContent1 += '<br/>';
      newContent1 += '<b>URL:</b> <a href="';
      newContent1 += responseObject.Managing_Symptoms[i].URL;
      newContent1 += '">';
      newContent1 += responseObject.Managing_Symptoms[i].URL;
      newContent1 += '</a></p>';
      Tips1[i] = '<b>Tips:</b>' + responseObject.ManagingSymptoms[i].Tip;
      Diary1[i] = '<b>Post Content:</b> ' + responseObject.ManagingSymptoms[i].FullPost + '</br>';
      Author1[i] = '<b>Author:</b> ' + responseObject.ManagingSymptoms[i].Author + '</br>';
      URL1[i] = '<b>URL:</b>' + responseObject.ManagingSymptoms[i].URL + '</br>';
    }

    $('div')[0].innerHTML=newContent1;
 
    $('.Managing_Symptoms').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Tips1[thisIndex] + Diary1[thisIndex] + Author1[thisIndex] + URL1[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent1[thisIndex]);
    });
 
            document.getElementById('Managing_Symptoms').innerHTML = newContent1;
  }
};

xhr.open ('GET', 'js/data_for_project-2.json', true);
xhr.send(null);
