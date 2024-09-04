document.addEventListener('DOMContentLoaded', function() {
    var stripe = Stripe('your_publishable_key');
    var elements = stripe.elements();

    var card = elements.create('card');
    card.mount('#card-element');

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
            if (result.error) {
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server
                console.log(result.token);
                alert('Payment successful! Token: ' + result.token.id);
            }
        });
    });
});
