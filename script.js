//FireBaseのログイン機能
const firebaseConfig = {
  apiKey: "AIzaSyDMuOygbY8BRPv9nIWCT9Ee6zm1fNbCDVo",
  authDomain: "guitarclicker-cdc66.firebaseapp.com",
  projectId: "guitarclicker-cdc66",
  appId: "1:1073871813234:web:c8e84f7982538e7b2da0eb"
};
//Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// Google認証
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`ようこそ、${user.displayName} さん！`);
    })
    .catch((error) => {
      console.error(error);
      alert("ログインに失敗しました。");
    });
}

// ボタンを押したときの挙動
document.getElementById("tapButton").addEventListener("click", () => {
  alert("タップされました！");
});

// 縦横判定（縦以外のときに警告表示）
function checkOrientation() {
  const warning = document.getElementById('landscape-warning');
  if (window.innerHeight < window.innerWidth) {
    warning.style.display = 'block';
  } else {
    warning.style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);