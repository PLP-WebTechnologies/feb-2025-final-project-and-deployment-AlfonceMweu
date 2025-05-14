// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');

newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Basic email validation (you can improve this)
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
        newsletterMessage.textContent = 'Thank you for subscribing!';
        newsletterForm.reset(); // Clear the form
    } else {
        newsletterMessage.textContent = 'Please enter a valid email address.';
    }
});

// Comment Form Submission (Basic Example)
const commentForm = document.getElementById('comment-form');
const commentMessage = document.getElementById('comment-message');

if (commentForm) { // Check if the comment form exists (only on post.html)
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const commentTextarea = commentForm.querySelector('textarea');
        if (commentTextarea.value.trim() !== '') {
            // In a real application, you'd send the comment to a server
            // and dynamically add it to the page.
            commentMessage.textContent = 'Thank you for your comment!';
            commentForm.reset();
        } else {
            commentMessage.textContent = 'Please enter a comment.';
        }
    });
}