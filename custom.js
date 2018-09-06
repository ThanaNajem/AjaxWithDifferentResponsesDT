$(document).ready(function () {
	/**/

	$.ajax({

		url: "countries.php",
		method: "POST",
		dataType: "JSON",
		success: function (data) {

			var jsonData = JSON.stringify(data)
			var obj = JSON.parse(jsonData)
			// console.log(obj);
			// alert("object"+obj)
			 


			var $el = $("#CountryName");
			$el.empty(); // remove old options
			$el.append("<option value=" + 0 + ">Please Select</option>");
			$.each(obj, function (value, key) {
				$el.append("<option value='" + key + "'>" + value + "</option>");
			});


		},
		error: function (data) {

			console.log(data.responseText);
		}

	}); 
	/**/
});