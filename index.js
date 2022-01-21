// Import stylesheets
import './style.css';

// Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');
const btnSubmit = document.getElementById('submit');

async function main() {
  liff.ready.then(() => {
    if (liff.getOS === 'ios') {
      body.style.backgroundColor = '#eeeeee';
    }
  });

  await liff.init({ liffId: '1656821779-oVQW95Rm' });
}
main();

function sendMessage() {
  liff
    .sendMessages([{ type: 'text', text: 'ส่งแล้ว' }])
    .then(() => {
      liff.closeWindow();
    })
    .catch((e) => {
      window.alert("Message hasn't been sent");
    });
}

async function Submit() {}

btnSubmit.onclick = () => {
  sendMessage();
};
