function showPage(id) {
  document.querySelectorAll('.page').forEach(el => el.style.display = 'none');
  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
}