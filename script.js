// Learning Laboratory Interactions
document.addEventListener('DOMContentLoaded', () => {
  // Sample Session Simulator
  const simulator = document.querySelector('.session-simulator');
  const options = document.querySelectorAll('.option-btn');
  const feedbackSection = document.querySelector('.feedback-section');
  const nextQuestionBtn = document.querySelector('.next-question-btn');
  
  if (simulator) {
    options.forEach(option => {
      option.addEventListener('click', () => {
        // Remove previous selections
        options.forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
        });
        
        // Mark selected option
        if (option.dataset.correct === 'true') {
          option.classList.add('correct');
        } else {
          option.classList.add('incorrect');
        }
        
        // Show feedback
        feedbackSection.classList.remove('hidden');
        feedbackSection.classList.add('animate-fade-in-up');
      });
    });
    
    if (nextQuestionBtn) {
      nextQuestionBtn.addEventListener('click', () => {
        // Reset simulator state
        options.forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
        });
        feedbackSection.classList.add('hidden');
        feedbackSection.classList.remove('animate-fade-in-up');
      });
    }
  }
  
  // Methodology Cards Animation
  const methodologyCards = document.querySelectorAll('.methodology-card');
  methodologyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});

// Learning Journey Navigator
document.addEventListener('DOMContentLoaded', () => {
  const journeySteps = document.querySelectorAll('.journey-step');
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // Initialize first step as active
  journeySteps[0].classList.add('active');
  
  // Add click handlers for each step
  journeySteps.forEach((step, index) => {
    step.addEventListener('click', () => {
      // Update all steps up to clicked step
      journeySteps.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('active');
          s.classList.remove('completed');
        } else {
          s.classList.remove('active', 'completed');
        }
      });
      
      // Animate progress bars
      progressBars.forEach((bar, i) => {
        if (i <= index) {
          bar.classList.add('animate');
        } else {
          bar.classList.remove('animate');
          bar.style.width = '0%';
        }
      });
    });
    
    // Add hover effect
    step.addEventListener('mouseenter', () => {
      step.querySelector('.step-circle').style.transform = 'scale(1.1)';
    });
    
    step.addEventListener('mouseleave', () => {
      step.querySelector('.step-circle').style.transform = 'scale(1)';
    });
  });
}); 