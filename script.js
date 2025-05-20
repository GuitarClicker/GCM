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