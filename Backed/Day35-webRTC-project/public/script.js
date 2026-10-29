// DOM Elements
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

const startCameraBtn = document.getElementById('startCamera');
const startCallBtn = document.getElementById('startCall');
const endCallBtn = document.getElementById('endCall');

const incomingCallBox = document.getElementById('incomingCall');
const acceptCallBtn = document.getElementById('acceptCall');
const rejectCallBtn = document.getElementById('rejectCall');

// Button interaction: disable Start Call when pressed
startCallBtn.addEventListener('click', () => {
    startCallBtn.disabled = true;
    endCallBtn.disabled = false;
    console.log('Start Call clicked - initiating call...');
    // TODO: Implement WebRTC createOffer / signaling here
});

// End Call interaction
endCallBtn.addEventListener('click', () => {
    startCallBtn.disabled = false;
    endCallBtn.disabled = true;
    console.log('Call ended');
    // TODO: Implement WebRTC close connection logic here
});

// Start Camera placeholder
startCameraBtn.addEventListener('click', async () => {
    console.log('Start camera clicked');
    // TODO: Implement navigator.mediaDevices.getUserMedia logic here
});

// Helper: Call this function when signaling notifies of an incoming call
function showIncomingCall() {
    incomingCallBox.style.display = 'flex';
    acceptCallBtn.disabled = false;
    rejectCallBtn.disabled = false;
}

// Incoming call actions
acceptCallBtn.addEventListener('click', () => {
    console.log('Call accepted');
    incomingCallBox.style.display = 'none';
    acceptCallBtn.disabled = true;
    rejectCallBtn.disabled = true;
    startCallBtn.disabled = true;
    endCallBtn.disabled = false;
    // TODO: Implement WebRTC answer logic here
});

rejectCallBtn.addEventListener('click', () => {
    console.log('Call rejected');
    incomingCallBox.style.display = 'none';
    acceptCallBtn.disabled = true;
    rejectCallBtn.disabled = true;
    // TODO: Implement call reject notification to peer
});
