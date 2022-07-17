/**
 * Import Alpine js
 */
import Alpine from 'alpinejs';
import nav from './alpine/nav.js';

window.Alpine = Alpine;

Alpine.data('nav', nav);

Alpine.start();
