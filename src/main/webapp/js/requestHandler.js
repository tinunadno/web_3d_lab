function sendRequest(xValue, yValue, radius) {
    // Log the data being sent
    console.log('Data:', { xValue, yValue, radius });

    // Send AJAX request
$.ajax({
    type: 'POST',
    url: 'ControllerServlet',
    data: {
        xValue: xValue,
        yValue: yValue,
        radius: radius
    },
    dataType: 'json', // Expect a JSON response
    success: function(response) {
        console.log('Response:', response);
            // Check if response is well-formed

        insertJSON(response);
        sessionStorage.setItem('responseData', JSON.stringify(response));
    },
    error: function(xhr, status, error) {
        console.error('AJAX Error:', error);
        $('#result').html('<p>Error occurred while processing your request.</p>');
    }
});

}

function insertJSON(response){
console.log("ama hera")
    if (response && typeof response === 'object' && response!="") {
        console.log("ama hera1")

        if (response.table !== null) {
            console.log("table")
            console.log(response.table)
            $('#tableBody').html(response.table);
        }
        if (response.result !== null) {
            $('#result').html(response.result);
        }
        if (response.points !== null) {
            $('#points').html(response.points);
        }
    }
}