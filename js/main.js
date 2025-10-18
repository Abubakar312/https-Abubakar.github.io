// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// handle contact form submit feedback
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e => {
    // formspree will handle send; show quick disabled state
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // let normal submission proceed (remove if using AJAX)
    setTimeout(()=> {
      btn.textContent = 'Send';
      btn.disabled = false;
    }, 2000);
  });
}
