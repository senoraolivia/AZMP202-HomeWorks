let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
let sidebar = document.getElementById('sidebar');
let body = document.body;

openBtn.addEventListener('click', function() {
    sidebar.classList.add('open');
    body.classList.add('sidebar-open');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
});
