$(document).ready(function(){
/**/

/* start json */


$.ajax({
type: "GET",
url: "person.xml",
dataType: "xml",
success: function(xml) {

var select = $('#PersonName');
	var optionsHtml = new Array();

optionsHtml.push( "<option class='ddindent' value='0'>please choose</option>");

    $('age', xml).each(function(){
                  var value = $(this).attr('value');
                  var label = $(this).text();

optionsHtml.push( "<option class='ddindent' value='"+ value +"'>"+label+"</option>");

        });
optionsHtml = optionsHtml.join('');
select.append(optionsHtml);
	}, //sucess close
	error:function(xml){
		 
			 console.log(xml.responseText);
		}
}); 


$('#PersonName').on('change',function(){
var PersonName = $('#PersonName').val();
 var flag = false;
if (PersonName!=0) {

	$.ajax({

		url:"person.xml",
		method:"GET",
		dataType:"xml",
		success:function(xml){ 

			   $('age', xml).each(function(){
                  var value = $(this).attr('value');
                  var label = $(this).text();
if(value==PersonName){
flag=true;
			   }

        });
			  
  
if (flag) {

  $('#PersonAge').val(PersonName);
}
},
		error:function(xml){
		 
			 console.log(xml.responseText);
		}

	});

}
	else{alert("please choose");

  $('#PersonAge').val('');
			
		}
});



 
 

	 
	$.ajax({

		url:"countries.php",
		method:"POST",
		dataType:"JSON",
		success:function(data){ 

			var jsonData = JSON.stringify(data)
			 var obj = JSON.parse(jsonData)
			 // console.log(obj);
			 // alert("object"+obj)
			 //   alert(obj.length)
  


var $el = $("#CountryName"); 
    $el.empty(); // remove old options
    $el.append("<option value="+0+">Please Select</option>");
    $.each(obj, function(value, key) {
        $el.append("<option value='"+ key +"'>"+value+"</option>");
    });  

			
		},
		error:function(data){
		 
			 console.log(data.responseText);
		}

	});
	// event.preventDefault();

$('#CountryName').on('change',function(){
var psodoCountryCode = $('#CountryName').val();
/**/var flag = false;
if (psodoCountryCode!=0) {$.ajax({

		url:"countries.php",
		method:"POST",
		dataType:"JSON",
		success:function(data){ 

			var jsonData = JSON.stringify(data)
			 var obj = JSON.parse(jsonData)
			  console.log(obj); 
			   $.each(obj, function(value, key) {
			    
			   if(key==psodoCountryCode){
flag=true;
			   } 
    });  
  
if (flag) {

  $('#countryCode').val(psodoCountryCode);
}
			
		},
		error:function(data){
		 
			 console.log(data.responseText);
		}

	});}
else{alert("please choose");

  $('#countryCode').val('');
}



/**/
});

	event.preventDefault();
/**/
});
