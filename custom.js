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
			//   alert(obj.length)


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
	// event.preventDefault();

	$('#CountryName').on('change', function () {
		var psodoCountryCode = $('#CountryName').val();
		/**/
		var flag = false;
		if (psodoCountryCode != 0) {
			$.ajax({

				url: "countries.php",
				method: "POST",
				dataType: "JSON",
				success: function (data) {

					var jsonData = JSON.stringify(data)
					var obj = JSON.parse(jsonData)
					console.log(obj);
					$.each(obj, function (value, key) {

						if (key == psodoCountryCode) {
							flag = true;
						}
					});

					if (flag) {

						$('#countryCode').val(psodoCountryCode);
					}

				},
				error: function (data) {

					console.log(data.responseText);
				}

			});
		} else {
			alert("please choose")

			$('#countryCode').val('');
		}


		/**/
	});

	event.preventDefault();
	/**/
});