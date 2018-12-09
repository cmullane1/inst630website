$("#tfnewsearch").submit(function(e) {
    e.preventDefault();
});
var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var x5 = '';
    var newContent5 = '';
    var newContent5 = [];
    var newContentWithTags5 = [];
    var Tips5 = [];
    var Diary5 = [];
    var URL5 = [];
    var Author5 = [];
    for (var i =0; i < responseObject.Advocacy.length; i++) { // Loop through object
      newContent5[i] = '';
      newContent5[i] += '<b>Tips: </b>' + responseObject.Advocacy[i].Tip + '</br>';
      newContentWithTags5[i] = '<p class="tips5" id="' + i + '">' + newContent5[i] + '</p>' + '</br>';
   	  x5 += newContentWithTags5 [i];
   	  Diary5[i] += '<b></br>Post Content:</b> ' + responseObject.Advocacy[i].FullPost + '</br>';
      Author5[i] += '<b></br>Author: </b> ' + responseObject.Advocacy[i].Author + '</br>';
      URL5[i] += '<b></br>URL: </b>' + responseObject.Advocacy[i].URL + '</br>';
    }

    $('#search_return5')[0].innerHTML = x5;
 
    $('.tips5').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary5[thisIndex] + Author5[thisIndex] + URL5[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent5[thisIndex]);
    });
	var x4 = '';
    var newContent4 = '';
    var newContent4 = [];
    var newContentWithTags4 = [];
    var Tips4 = [];
    var Diary4 = [];
    var URL4 = [];
    var Author4 = [];
    for (var i =0; i < responseObject.Coping.length; i++) { // Loop through object
      newContent4[i] = '';
      newContent4[i] += '<b>Tips: </b>' + responseObject.Coping[i].Tip + '</br>';
      newContentWithTags4[i] = '<p class="tips4" id="' + i + '">' + newContent4[i] + '</p>' + '</br>';
   	  x4 += newContentWithTags4 [i];
   	  Diary4[i] += '<b></br>Post Content:</b> ' + responseObject.Coping[i].FullPost + '</br>';
      Author4[i] += '<b></br>Author: </b> ' + responseObject.Coping[i].Author + '</br>';
      URL4[i] += '<b></br>URL: </b>' + responseObject.Coping[i].URL + '</br>';
    }

    $('#search_return4')[0].innerHTML = x4;
 
    $('.tips4').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary4[thisIndex] + Author4[thisIndex] + URL4[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent4[thisIndex]);
    });
 
    var x3 = '';
    var newContent3 = '';
    var newContent3 = [];
    var newContentWithTags3 = [];
    var Tips3 = [];
    var Diary3 = [];
    var URL3 = [];
    var Author3 = [];
    for (var i =0; i < responseObject.Life_Advice.length; i++) { // Loop through object
      newContent3[i] = '';
      newContent3[i] += '<b>Tips: </b>' + responseObject.Life_Advice[i].Tip + '</br>';
      newContentWithTags3[i] = '<p class="tips3" id="' + i + '">' + newContent3[i] + '</p>' + '</br>';
   	  x3 += newContentWithTags3[i];
   	  Diary3[i] += '<b></br>Post Content:</b> ' + responseObject.Life_Advice[i].FullPost + '</br>';
      Author3[i] += '<b></br>Author: </b> ' + responseObject.Life_Advice[i].Author + '</br>';
      URL3[i] += '<b></br>URL: </b>' + responseObject.Life_Advice[i].URL + '</br>';
    }

    $('#search_return3')[0].innerHTML = x3;
 
    $('.tips3').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary3[thisIndex] + Author3[thisIndex] + URL3[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent3[thisIndex]);
    });
	
	var x1 = '';
    var newContent1 = '';
    var newContent1 = [];
    var newContentWithTags1 = [];
    var Tips1 = [];
    var Diary1 = [];
    var URL1 = [];
    var Author1 = [];
    for (var i =0; i < responseObject.Managing_Symptoms.length; i++) { // Loop through object
      newContent1[i] = '';
      newContent1[i] += '<b>Tips: </b>' + responseObject.Managing_Symptoms[i].Tip + '</br>';
      newContentWithTags1[i] = '<p class="tips1" id="' + i + '">' + newContent1[i] + '</p>' + '</br>';
   	  x1 += newContentWithTags1 [i];
   	  Diary1[i] += '<b></br>Post Content:</b> ' + responseObject.Managing_Symptoms[i].FullPost + '</br>';
      Author1[i] += '<b></br>Author: </b> ' + responseObject.Managing_Symptoms[i].Author + '</br>';
      URL1[i] += '<b></br>URL: </b>' + responseObject.Managing_Symptoms[i].URL + '</br>';
    }

    $('#search_return1')[0].innerHTML = x1;
 
    $('.tips1').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary1[thisIndex] + Author1[thisIndex] + URL1[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent1[thisIndex]);
    });
	
	 var x2 = '';
	  var newContent2 = '';
      var newContent2 = [];
      var newContentWithTags2 = [];
      var Tips2 = [];
      var Diary2 = [];
      var URL2 = [];
      var Author2 = [];
      for (var i =0; i < responseObject.Relationships.length; i++) { // Loop through object
      newContent2[i] = '';
      newContent2[i] += '<b>Tips: </b>' + responseObject.Relationships[i].Tip + '</br>';
      newContentWithTags2[i] = '<p class="tips2" id="' + i + '">' + newContent2[i] + '</p>' + '</br>';
   	  x2 += newContentWithTags2 [i];
   	  Diary2[i] += '<b></br>Post Content:</b> ' + responseObject.Relationships[i].FullPost + '</br>';
      Author2[i] += '<b></br>Author: </b> ' + responseObject.Relationships[i].Author + '</br>';
      URL2[i] += '<b></br>URL: </b>' + responseObject.Relationships[i].URL + '</br>';
    }

    $('#search_return2')[0].innerHTML = x2;
 
    $('.tips2').hover(function() {
      thisIndex = $(this).attr('id');
      var toAppend = Diary2[thisIndex] + Author2[thisIndex] + URL2[thisIndex];
      $(this).append(toAppend);
    }, function () {
        $(this).html(newContent2[thisIndex]);
    });
 
  }
};

xhr.open ('GET', 'data_for_project-2.json', true);
xhr.send(null);


  $("#tfsearchbox").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".tips1, .tips2, .tips3, .tips4, .tips5").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });