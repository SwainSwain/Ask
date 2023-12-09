function submitBooking() {
    // Fetch values from the form
    var carType = document.getElementById("carType").value;
    var pickupPoint = document.getElementById("pickupPoint").value;
    var dropPoint = document.getElementById("dropPoint").value;
    var pickupDate = document.getElementById("pickupDate").value;
    var pickupTime = document.getElementById("pickupTime").value;

    // Validate form fields (you can add more validation logic here)

    // Create a booking object (for demonstration purposes)
    var booking = {
        carType: carType,
        pickupPoint: pickupPoint,
        dropPoint: dropPoint,
        pickupDate: pickupDate,
        pickupTime: pickupTime
    };

    // For this example, simply log the booking object to the console
    console.log("Booking Submitted:", booking);

    // You can add logic here to send the booking data to a server for further processing
    // (e.g., using AJAX to send a request to a server-side script)
}
