// Import stylesheets
import './style.css';

// Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');
const btnSubmit = document.getElementById('submit');

async function main() {
  await liff.init({ liffId: '1656821779-oVQW95Rm' });
  liff.ready.then(() => {
    if (liff.getOS === 'ios') {
      body.style.backgroundColor = '#000000';
    }
  });
}
main();

async function Submit() {
  const result = await liff
    .sendMessages([
      {
        type: 'text',
        text: 'ระบบกำลังดำเนินการ',
      },
    ])
    .then(() => {
      console.log('message sent');
    })
    .catch((err) => {
      console.log('error', err);
    });
}

btnSubmit.onclick = () => {
  Submit();
};
