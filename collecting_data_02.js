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
      
    var newContent3 = '';
    for (var i =0; i < responseObject.Advocacy.length; i++) { // Loop through object
      newContent3 = newContent3 + '<p class="tips">';
      newContent3 += '<b>Tip:</b> ';
      newContent3 += responseObject.Advocacy[i].Tip;
      newContent3 += '<br/>';
      newContent3 += '<b>Post Content:</b> ';
      newContent3 += responseObject.Advocacy[i].FullPost;
      newContent3 += '<br/>';
      newContent3 += '<b>Author:</b> ';
      newContent3 += responseObject.Advocacy[i].Author;
      newContent3 += '<br/>';
      newContent3 += '<b>URL:</b> <a href="';
      newContent3 += responseObject.Advocacy[i].URL;
      newContent3 += '">';
      newContent3 += responseObject.Advocacy[i].URL;
      newContent3 += '</a></p>';
    } 
      
      
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
      
    var newContent5 = '';
    for (var i =0; i < responseObject.Life_Advice.length; i++) { // Loop through object
      newContent5 = newContent5 + '<p class="tips">';
      newContent5 += '<b>Tip:</b> ';
      newContent5 += responseObject.Life_Advice[i].Tip;
      newContent5 += '<br/>';
      newContent5 += '<b>Post Content:</b> ';
      newContent5 += responseObject.Life_Advice[i].FullPost;
      newContent5 += '<br/>';
      newContent5 += '<b>Author:</b> ';
      newContent5 += responseObject.Life_Advice[i].Author;
      newContent5 += '<br/>';
      newContent5 += '<b>URL:</b> <a href="';
      newContent5 += responseObject.Life_Advice[i].URL;
      newContent5 += '">';
      newContent5 += responseObject.Life_Advice[i].URL;
      newContent5 += '</a></p>';
    }         
            document.getElementById('Managing_Symptoms').innerHTML = newContent1;
            document.getElementById('Relationships').innerHTML = newContent2;
            document.getElementById('Advocacy').innerHTML = newContent3;
            document.getElementById('Coping').innerHTML = newContent4;
            document.getElementById('Life_Advice').innerHTML = newContent5;
  }
};

xhr.open ('GET', 'js/data_for_project-2.json', true);
xhr.send(null);
