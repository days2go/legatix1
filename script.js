// SPA Navigation
    function showPage(selectedPage) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
        if (page.id === selectedPage) {
          page.classList.remove('hidden');
          // trigger fade in
          page.classList.remove('fade-enter');
          page.classList.add('fade-enter-active');
        } else {
          page.classList.add('hidden');
          page.classList.remove('fade-enter-active');
        }
      });

      // Show/hide navigation
      const nav = document.getElementById('nav');
      if(selectedPage === 'login') {
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }

      // Update nav active link
      document.querySelectorAll('#nav-links .nav-link').forEach(link => {
        if (link.dataset.page === selectedPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    // Login and Signup toggle
    function toggleForm() {
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
      } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
      }
    }

    // Dummy login flow (replace with real auth)
    function handleLogin(evt) {
      evt.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      if (!email || !password) {
        alert('Please enter valid credentials.');
        return;
      }
      // Simulate success
      showPage('dashboard');
    }

    // Dummy signup flow
    function handleSignup(evt) {
      evt.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const pass = document.getElementById('signupPassword').value.trim();
      const confirmPass = document.getElementById('signupConfirmPassword').value.trim();

      if (!name || !email || !pass || !confirmPass) {
        alert('Please fill all fields.');
        return;
      }
      if (pass !== confirmPass) {
        alert('Passwords do not match.');
        return;
      }
      alert(`Welcome, ${name}! Your account has been created.`);
      showPage('dashboard');
    }

    // Social login dummy
    function socialLogin(provider) {
      alert(`Logging in with ${provider}...`);
      showPage('dashboard');
    }

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
      showPage('login');
      clearLoginForms();
    });

    function clearLoginForms() {
      document.getElementById('loginEmail').value = '';
      document.getElementById('loginPassword').value = '';
      document.getElementById('signupName').value = '';
      document.getElementById('signupEmail').value = '';
      document.getElementById('signupPassword').value = '';
      document.getElementById('signupConfirmPassword').value = '';
      // reset forms view
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    }

    // Modal handling
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalName = document.getElementById('modal-name');
    const modalEmail = document.getElementById('modal-email');

    function openModal(type, subject = '') {
      modal.classList.remove('hidden');
      modalTitle.textContent = type === 'register' ? `Register for "${subject}"` : `Apply for "${subject}"`;

      // Prefill with logged in user info (hardcoded for demo)
      modalName.value = 'Legatix Team';
      modalEmail.value = 'legatix11@example.com';
    }
    function closeModal() {
      modal.classList.add('hidden');
    }
    function submitModal(evt) {
      evt.preventDefault();
      // Basic validation
      if (!modalName.value.trim() || !modalEmail.value.trim()) {
        alert('Please complete all fields.');
        return;
      }
      alert('Submitted successfully!');
      closeModal();
    }

    // Other interactions
    function editProfile() {
      alert('Edit profile functionality would open here.');
    }
    function postJob(evt) {
      evt.preventDefault();
      const title = document.getElementById('jobTitle').value.trim();
      const company = document.getElementById('jobCompany').value.trim();
      const location = document.getElementById('jobLocation').value.trim();

      if (!title || !company || !location) {
        alert('Please fill all job posting fields.');
        return;
      }
      alert(`Job "${title}" posted successfully!`);
      evt.target.reset();
    }
    function requestMentorship(evt) {
      evt.preventDefault();
      const topic = document.getElementById('mentorshipTopic').value.trim();
      const time = document.getElementById('mentorshipTime').value.trim();

      if (!topic || !time) {
        alert('Please fill all mentorship request fields.');
        return;
      }
      alert('Mentorship request submitted!');
      evt.target.reset();
    }
    function acceptMentorship() {
      alert('Mentorship accepted! You can now chat with the mentee.');
    }

    // Setup navigation buttons listeners
    document.querySelectorAll('#nav-links .nav-link[data-page]').forEach(btn => {
      btn.addEventListener('click', () => showPage(btn.dataset.page));
    });

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      showPage('login');
    });
  