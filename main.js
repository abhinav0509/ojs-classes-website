// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu after clicking a link
      mobileMenu.classList.add('hidden');
    }
  });
});

// Countdown Timer
function updateCountdown() {
  // Set the date we're counting down to (30 days from now)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 30);

  function update() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown-timer").style.display = "none";
    }
  }

  update();
  const x = setInterval(update, 1000);
}

updateCountdown();

// Initialize CountUp.js for metrics
import { CountUp } from 'countup.js';

const metrics = [
  { id: 'successRate', end: 98 },
  { id: 'selections', end: 1500 },
  { id: 'students', end: 5000 },
  { id: 'experience', end: 15 }
];

const options = {
  duration: 2.5,
  useEasing: true,
  useGrouping: true,
};

// Initialize metrics when they come into view
const metricsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      metrics.forEach(metric => {
        const countUp = new CountUp(metric.id, metric.end, options);
        countUp.start();
      });
      metricsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const metricsSection = document.querySelector('#metrics');
if (metricsSection) {
  metricsObserver.observe(metricsSection);
}

// Initialize Swiper for testimonials
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonialSwiper = new Swiper('.testimonial-swiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Leaflet map
import L from 'leaflet';

document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('locationMap');
  if (mapElement) {
    const map = L.map('locationMap').setView([28.5244, 77.1855], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([28.5244, 77.1855])
      .addTo(map)
      .bindPopup('OJS Classes<br>Vasant Kunj, New Delhi')
      .openPopup();
  }
});

// Guidance Genie
const guidanceGenie = document.createElement('div');
guidanceGenie.className = 'guidance-genie hidden';
guidanceGenie.innerHTML = `
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
  </svg>
`;
document.body.appendChild(guidanceGenie);

setTimeout(() => {
  guidanceGenie.classList.remove('hidden');
}, 30000);

// Momentum Bar
const momentumBar = document.createElement('div');
momentumBar.className = 'momentum-bar';
momentumBar.innerHTML = '<div class="momentum-progress" style="width: 0%"></div>';
document.body.appendChild(momentumBar);

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector('.momentum-progress').style.width = scrolled + '%';
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Clear form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const button = item.querySelector('button');
  const content = item.querySelector('.faq-content');

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    content.classList.toggle('hidden');
  });
});

// Subject Spectrum Scroll Functionality
const subjectSpectrum = document.querySelector('.subject-spectrum-container');
const scrollLeft = document.querySelector('.scroll-indicator-left');
const scrollRight = document.querySelector('.scroll-indicator-right');

if (subjectSpectrum) {
  // Create scroll indicators
  const leftIndicator = document.createElement('button');
  leftIndicator.className = 'scroll-indicator scroll-indicator-left';
  leftIndicator.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>';
  
  const rightIndicator = document.createElement('button');
  rightIndicator.className = 'scroll-indicator scroll-indicator-right';
  rightIndicator.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>';
  
  subjectSpectrum.parentElement.appendChild(leftIndicator);
  subjectSpectrum.parentElement.appendChild(rightIndicator);
  
  // Scroll event handlers
  leftIndicator.addEventListener('click', () => {
    subjectSpectrum.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });
  
  rightIndicator.addEventListener('click', () => {
    subjectSpectrum.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
  
  // Show/hide indicators based on scroll position
  const updateScrollIndicators = () => {
    const { scrollLeft, scrollWidth, clientWidth } = subjectSpectrum;
    leftIndicator.style.display = scrollLeft > 0 ? 'flex' : 'none';
    rightIndicator.style.display = scrollLeft < scrollWidth - clientWidth ? 'flex' : 'none';
  };
  
  subjectSpectrum.addEventListener('scroll', updateScrollIndicators);
  window.addEventListener('resize', updateScrollIndicators);
  updateScrollIndicators();
}

// Parent Perspective Portal Tabs
const parentTabs = document.querySelectorAll('.parent-tab');
const parentTestimonials = document.querySelectorAll('.parent-testimonial');

parentTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and testimonials
    parentTabs.forEach(t => t.classList.remove('active'));
    parentTestimonials.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding testimonial
    tab.classList.add('active');
    const testimonialId = tab.getAttribute('data-tab');
    document.getElementById(testimonialId).classList.add('active');
  });
});

// Video Testimonial Modal
const videoCards = document.querySelectorAll('.video-card');
const modal = document.createElement('div');
modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden';
modal.innerHTML = `
  <div class="relative w-full max-w-4xl mx-4">
    <button class="close-modal absolute top-4 right-4 text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="aspect-w-16 aspect-h-9">
      <iframe class="w-full h-full" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
`;
document.body.appendChild(modal);

videoCards.forEach(card => {
  const playButton = card.querySelector('.play-button');
  playButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Here you would set the iframe src to the actual video URL
    // modal.querySelector('iframe').src = 'YOUR_VIDEO_URL';
  });
});

modal.querySelector('.close-modal').addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.querySelector('iframe').src = '';
});

// Alumni Achievement Atlas Map
const alumniMap = L.map('alumniMap').setView([20.5937, 78.9629], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(alumniMap);

// Sample alumni locations (replace with actual data)
const alumniLocations = [
  { lat: 40.7128, lng: -74.0060, name: 'New York, USA' },
  { lat: 51.5074, lng: -0.1278, name: 'London, UK' },
  { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
  { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan' },
  { lat: 37.7749, lng: -122.4194, name: 'San Francisco, USA' }
];

alumniLocations.forEach(location => {
  const marker = L.marker([location.lat, location.lng]).addTo(alumniMap);
  marker.bindPopup(`<b>${location.name}</b><br>OJS Alumni Community`);
});

// Connection Crucible Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize map
  const map = L.map('locationMap').setView([28.5245, 77.1855], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Add marker for OJS Classes
  L.marker([28.5245, 77.1855])
    .addTo(map)
    .bindPopup('OJS Classes, Vasant Kunj')
    .openPopup();

  // Form field suggestions
  const queryTypeInput = document.getElementById('queryType');
  const suggestionsContainer = document.querySelector('.field-suggestions');
  const suggestions = [
    { value: 'admission', text: 'Admission Process' },
    { value: 'course', text: 'Course Information' },
    { value: 'fee', text: 'Fee Structure' },
    { value: 'other', text: 'Other Queries' }
  ];

  queryTypeInput.addEventListener('focus', function() {
    showSuggestions();
  });

  queryTypeInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    const filtered = suggestions.filter(s => 
      s.text.toLowerCase().includes(value)
    );
    showSuggestions(filtered);
  });

  function showSuggestions(filteredSuggestions = suggestions) {
    suggestionsContainer.innerHTML = filteredSuggestions
      .map(s => `<div class="field-suggestion-item" data-value="${s.value}">${s.text}</div>`)
      .join('');
    suggestionsContainer.classList.add('active');
  }

  suggestionsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('field-suggestion-item')) {
      queryTypeInput.value = e.target.textContent;
      suggestionsContainer.classList.remove('active');
    }
  });

  // FAQ Search and Highlight
  const faqSearch = document.getElementById('faqSearch');
  const faqItems = document.querySelectorAll('.faq-item');

  faqSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    faqItems.forEach(item => {
      const question = item.querySelector('.question-text').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
        item.classList.add('highlight');
        
        // Highlight matching text
        const questionText = item.querySelector('.question-text');
        const answerText = item.querySelector('.faq-answer');
        
        if (searchTerm) {
          const regex = new RegExp(searchTerm, 'gi');
          questionText.innerHTML = questionText.textContent.replace(regex, 
            match => `<span class="bg-yellow-200">${match}</span>`
          );
          answerText.innerHTML = answerText.textContent.replace(regex, 
            match => `<span class="bg-yellow-200">${match}</span>`
          );
        } else {
          questionText.innerHTML = questionText.textContent;
          answerText.innerHTML = answerText.textContent;
        }
      } else {
        item.style.display = 'none';
        item.classList.remove('highlight');
      }
    });
  });

  // FAQ Accordion
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      answer.style.display = isExpanded ? 'none' : 'block';
      
      // Animate the answer
      if (!isExpanded) {
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          answer.style.opacity = '1';
          answer.style.transform = 'translateY(0)';
        }, 10);
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4';
    successMessage.innerHTML = `
      <strong class="font-bold">Success!</strong>
      <span class="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
    `;
    
    this.reset();
    this.appendChild(successMessage);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
});

// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevButton = document.querySelector('#prevSlide');
    const nextButton = document.querySelector('#nextSlide');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Initialize
    updateSlider();
    
    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Functions
    function updateSlider() {
        // Update slider position
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-white', index === currentSlide);
            dot.classList.toggle('bg-white/50', index !== currentSlide);
        });
        
        // Reset auto slide interval
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Event Listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
    });
    
    nextButton.addEventListener('click', () => {
        nextSlide();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Pause auto-slide on hover
    sliderTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    sliderTrack.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
});