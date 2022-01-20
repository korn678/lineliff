// Import stylesheets
import './style.css';

// Import LIFF SDK
import liff from '@line/liff';

// Body element
const body = document.getElementById('body');

// profile element
const pictureUrl = document.getElementById('pictureUrl');
const userId = document.getElementById('userId');
const statusMessage = document.getElementById('statusMessage');
const displayName = document.getElementById('displayName');
const email = document.getElementById('email');

async function main() {
  await liff.init({ liffId: '1656821779-oVQW95Rm' });
  liff.ready.then(() => {
    if (liff.getOS === 'ios') {
      body.style.backgroundColor = '#000000';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    // btnShare.style.display = 'block';
  });
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId:</b> ' + profile.userId;
  statusMessage.innerHTML = '<b>statusMessage:</b> ' + profile.statusMessage;
  displayName.innerHTML = '<b>displayName:</b> ' + profile.displayName;
  email.innerHTML = '<b>email:</b> ' + liff.getDecodedIDToken().email;
}
