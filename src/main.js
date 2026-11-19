import './styles/style.css';
import {gsap} from 'gsap';

gsap.from(".accueil .hero h1", { y: 30, opacity: 0, duration: 1 });

gsap.from(".accueil .hero p", { y: 30, opacity: 0, duration: 1, delay: 0.2 });

gsap.from(".accueil .hero a", { y: 30, opacity: 0, duration: 1, delay: 0.4 });
