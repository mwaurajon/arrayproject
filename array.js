const form = document.getElementById('order-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const item = document.getElementById('item').value;


  placeOrder(name, item, function(response) {
    if (response.status === 'success') {
      confirmation.innerText = `Order confirmed for ${name}. You ordered ${item}`;
    } else {
      confirmation.innerText = `Order failed : ${response.error}`;
    }
  });
});
function placeOrder(name, item, callback) {
  
  setTimeout(function() {
    const responses = [
      { status: 'success' },
      { status: 'error', error: 'Item unavailable' },
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    callback(response);
  }, 2000);
}