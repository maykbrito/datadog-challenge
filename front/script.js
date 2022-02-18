const API_URL = 'http://localhost:3333'

function createCheckout({ amount, type }) {
  return fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount, type })
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
}

next.onclick = function (e) {
  // get form data
  const formData = new FormData(checkoutForm)
  const amount = formData.get('amount')
  const type = formData.get('payment')

  if (!amount || !type) {
    alert('Please fill in all fields')
    return
  }

  // create checkout
  createCheckout({ amount, type }).then(data => {
    console.log(data)
    // redirect to checkout
    // window.location.href = `${API_URL}/checkout/${data.id}`
    // redirect to checkout page
    // window.location.href = `/checkout.html?id=${data.id}`
  })
}
