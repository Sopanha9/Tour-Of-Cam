document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = this;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        Swal.fire({
  icon: 'success',
  title: 'បានផ្ញើសារដោយជោគជ័យ',
  text: 'យើងបានទទួលសាររបស់អ្នកហើយ!',
  confirmButtonText: 'យល់ព្រម'
});
        form.reset(); // ✅ This resets the form
      } else {
        Swal.fire({
  icon: 'error',
  title: 'បញ្ហាបញ្ចូនសារ',
  text: 'សូមព្យាយាមម្តងទៀត។ មានបញ្ហាមួយបានកើតឡើង។',
  confirmButtonText: 'យល់ព្រម'
});

      }
    })
    .catch(error => {
      alert("Something went wrong.");
      console.error(error);
    });
  });

      function sendToTelegram() {
      const chatId = '1453582611'; // Replace with your Telegram user ID
      const botToken = '8107897652:AAEqyRwbGliHu-dFEP2nkAsHj-YJuVO0jZM'; // Replace with your Bot token
      
      // Get the message from textarea
      const message = document.getElementById('messageText').value;
      
      // Validate that message isn't empty
      if (!message.trim()) {
        alert('Please enter a message');
        return;
      }

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
  icon: 'success',
  title: 'បានផ្ញើសារដោយជោគជ័យ',
  text: 'យើងបានទទួលសាររបស់អ្នកហើយ!',
  confirmButtonText: 'យល់ព្រម'
});

        console.log(data);
        // Clear the textarea after sending
        document.getElementById('messageText').value = '';
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
  icon: 'error',
  title: 'បញ្ហាបញ្ចូនសារ',
  text: 'សូមព្យាយាមម្តងទៀត។ មានបញ្ហាមួយបានកើតឡើង។',
  confirmButtonText: 'យល់ព្រម'
});

      });
    }
