document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.success-message').classList.remove('hidden');
  e.target.reset();
});

const trackBtn = document.getElementById('trackBtn');
if (trackBtn) {
  trackBtn.addEventListener('click', () => {
    const input = document.getElementById('trackingInput').value.trim();
    if (!input) return;
    const ids = input.split(',').map(id => id.trim().toUpperCase());
    const resultsDiv = document.getElementById('trackingResults');
    resultsDiv.innerHTML = '';
    const data = ids.map(id => ({ id, status: 'In Transit', eta: '2-4 Days' }));
    localStorage.setItem('trackingData', JSON.stringify(data));
    data.forEach(pkg => {
      const div = document.createElement('div');
      div.className = 'result';
      div.innerHTML = `<p><strong>${pkg.id}</strong> — ${pkg.status} | ETA: ${pkg.eta}</p>`;
      resultsDiv.appendChild(div);
    });
  });

  const saved = localStorage.getItem('trackingData');
  if (saved) {
    const resultsDiv = document.getElementById('trackingResults');
    JSON.parse(saved).forEach(pkg => {
      const div = document.createElement('div');
      div.className = 'result';
      div.innerHTML = `<p><strong>${pkg.id}</strong> — ${pkg.status} | ETA: ${pkg.eta}</p>`;
      resultsDiv.appendChild(div);
    });
  }
}
