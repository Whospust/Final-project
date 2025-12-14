document.addEventListener('DOMContentLoaded', function() {
    //Form Validation
    const feedbackForm = document.getElementById('customerForm');


    // Only run if the form exists on the current page
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name').value;
            // Simple validation check
            if(nameInput.length < 2) {
                alert('Please enter a valid name.');
                return;
            }

            alert('Thank you, ' + nameInput + '! Your feedback has been mailed to our headquarters.');
            feedbackForm.reset();
        });
    }

});