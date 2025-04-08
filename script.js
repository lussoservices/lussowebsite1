
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quoteForm').addEventListener('submit', function (e) {
      e.preventDefault();

      // 💌 Collecting values
      const name = document.getElementById('name').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const departureDate = document.getElementById('departureDate').value;
      const arrivalDate = document.getElementById('arrivalDate').value;
      const adults = document.getElementById('adults').value;
      const children = document.getElementById('children').value || '0';

      // 🐛 Optional Debug (check if name is read properly)
      console.log("Name:", name);

      // 💬 WhatsApp message format
      const message = `Hi Lusso ✈️\n` +
        `I would like a flight quote:\n\n` +
        `නම: ${name}\n` +
        `ගමනාන්තය: ${destination}\n` +
        `පිටත්වීමේ දිනය: ${departureDate}\n` +
        `ආපසු පැමිණීමේ දිනය: ${arrivalDate}\n` +
        `වැඩිහිටියන්: ${adults}\n` +
        `ළමයි: ${children}`;

      // 🔗 Encode & Open WhatsApp
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/393534817003?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    });
  });

