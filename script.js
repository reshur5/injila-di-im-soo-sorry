/* ==========================================
   FOR INJILA DI - Apology Website
   Main JavaScript File
   ========================================== */

/**
 * Navigate to a specific page
 * @param {number} n - Page number to navigate to
 */
function next(n) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show the target page
  document.getElementById('p' + n).classList.add('active');
  
  // Update cat emotion based on page
  updateCatBehavior(n);
  
  // Trigger hearts only on certain pages (disabled)
  if (n === 6 || n === 10) triggerHearts();
  
  // Setup no button listener only on page 5
  if (n === 5) setupNoButton();
}

/**
 * Update cat behavior and animations based on current page
 * The cat represents the emotional journey through the apology
 * @param {number} pageNum - Current page number
 */
function updateCatBehavior(pageNum) {
  const cat = document.getElementById("catImg");
  
  // Remove all animation classes
  cat.classList.remove(
    'cat-entering', 
    'cat-thinking', 
    'cat-listening', 
    'cat-reactive', 
    'cat-nudge', 
    'cat-celebrating', 
    'cat-idea', 
    'cat-timetravel', 
    'cat-arrived'
  );
  
  // Clear inline styles to avoid conflicts with animations
  cat.style.bottom = '';
  cat.style.left = '';
  cat.style.right = '';
  cat.style.transform = '';
  
  // Apply page-specific behavior with smooth drifting animation
  switch(pageNum) {
    case 1:
    case 2:
      // Page 1-2: Curious entrance - cat drifts smoothly
      cat.classList.add('cat-entering');
      break;
      
    case 3:
      // Page 3: Thinking/nodding moment - cat drifts around
      cat.classList.add('cat-thinking');
      break;
      
    case 4:
      // Page 4: Calm and listening to apology - cat drifts
      cat.classList.add('cat-listening');
      break;
      
    case 5:
      // Page 5: Reactive to forgiveness choice - cat drifts
      cat.classList.add('cat-reactive');
      break;
      
    case 6:
      // Page 6: Happy celebration - cat drifts smoothly
      cat.classList.add('cat-celebrating');
      break;
      
    case 7:
      // Page 7: Cat has an idea - cat drifts
      cat.classList.add('cat-idea');
      break;
      
    case 8:
    case 9:
      // Pages 8-9: Time travel sequence - cat drifts with effect
      cat.classList.add('cat-timetravel');
      break;
      
    case 10:
      // Page 10: Time travel complete - cat drifts
      cat.classList.add('cat-arrived');
      triggerHearts();
      break;
  }
}

/**
 * Setup the "No" button behavior on page 5
 * The No button runs away from the cursor when user tries to click it
 * Creates emotional pressure in a cute way
 */
function setupNoButton() {
  let no = document.getElementById("no");
  
  if (no) {
    // Remove any existing listeners to avoid duplicates
    let newNo = no.cloneNode(true);
    no.parentNode.replaceChild(newNo, no);
    
    no = document.getElementById("no");
    const cat = document.getElementById("catImg");
    
    // When user hovers over No button
    no.addEventListener("mouseover", function() {
      // Cat nudges to show emotion
      cat.classList.remove('cat-nudge');
      setTimeout(() => {
        cat.classList.add('cat-nudge');
      }, 10);
      
      // Move the No button away
      no.style.position = "absolute";
      no.style.top = Math.random() * 60 + 20 + "%";
      no.style.left = Math.random() * 60 + 20 + "%";
    });
  }
}

/**
 * Trigger heart animations (DISABLED)
 * Was used to create celebration effect with falling hearts
 * Now disabled per user request
 */
function triggerHearts() {
  // Hearts disabled - user preference
}

/**
 * Initialize the website on page load
 * Sets up the cat on the first page and starts smooth movement
 */
document.addEventListener('DOMContentLoaded', () => {
  updateCatBehavior(1);
   
for(let i=0;i<25;i++){
  let heart = document.createElement("div");
  heart.className = "heart";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";

  document.querySelector(".hearts-bg").appendChild(heart);
}

});
