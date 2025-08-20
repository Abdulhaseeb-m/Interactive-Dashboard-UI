// Sidebar toggle
document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("collapsed");
});

// Dark/Light mode toggle
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Table search filter
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#userTable tr");
  rows.forEach(row => {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});

// Chart.js example
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 8],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false
  }
});
