import './style.css';
import { createIcons, Menu, UserSquare2, Cpu, Sparkles, Component, Video, Gamepad2, Swords, Ghost, ArrowRight, Image as ImageIcon, Palette, Brush, Star, Trophy, Briefcase, Code2, Github, Linkedin, Monitor, Twitter } from 'lucide';

// Initialize Lucide Icons
createIcons({
  icons: {
    Menu,
    UserSquare2,
    Cpu,
    Sparkles,
    Component,
    Video,
    Gamepad2,
    Swords,
    Ghost,
    ArrowRight,
    ImageIcon,
    Palette,
    Brush,
    Star,
    Trophy,
    Briefcase,
    Code2,
    Github,
    Linkedin,
    Monitor,
    Twitter
  }
});

// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const reveals = document.querySelectorAll('.reveal');

// Sticky Navbar Logic
function handleScroll() {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

// Mobile Menu Toggle
mobileMenuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// Close Mobile Menu on Link Click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

// Intersection Observer for Scroll Reveals
const revealOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const revealCallback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

reveals.forEach(reveal => {
  revealObserver.observe(reveal);
});

// Form Submission Prevention (demo only)
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for your message! This is a demo portfolio so the form isn't connected to a server.");
});
