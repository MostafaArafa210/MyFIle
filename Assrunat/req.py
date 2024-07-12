import stripe

# Set the Stripe live secret key
stripe.api_key = "pk_live_jbXiuOlVK5IHWWuypExBjXPG"

# Set the payment amount and currency
amount = 1000  # $10.00
currency = "usd"

# Create a payment intent
payment_intent = stripe.PaymentIntent.create(
    amount=amount,
    currency=currency,
    payment_method_types=["card"],
)

# Print the payment intent ID
print("Payment Intent ID:", payment_intent.id)