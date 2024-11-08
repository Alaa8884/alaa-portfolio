import project1 from '../images/rent_car.webp';
import project2 from '../images/masrawy_fast_food.webp';
import project3 from '../images/admin_dashboard.webp';
import project4 from '../images/task_manager.webp';

export const MENULINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export const PROJECTS = [
  {
    name: 'Admin Dashboard',
    description: 'Admin panel for managing customers',
    image: project3,
    gitHubLink: 'https://github.com/Alaa8884/React-admin-dashboard',
    liveDemoLink: 'https://admin-dashboard-alaa.vercel.app/',
    tech: ['React', 'JavaScript', 'Redux', 'Material UI'],
  },
  {
    name: 'Rent Car App',
    description: 'This is an Application for renting car services',
    image: project1,
    gitHubLink: 'https://github.com/Alaa8884/Rent-car-services',
    liveDemoLink: 'https://rent-car-services-blush.vercel.app/home',
    tech: ['React', 'JavaScript', 'Bootstrap'],
  },
  {
    name: 'Fast Food App',
    description:
      'This is fast food application for ordering and delivering food',
    image: project2,
    gitHubLink: 'https://github.com/Alaa8884/React-fast-food-Ecommerce-website',
    liveDemoLink: 'https://el-masrawy-fast-food-ecommerce-app.vercel.app/home',
    tech: ['React', 'JavaScript', 'Redux', 'Bootstrap'],
  },

  {
    name: 'Task Manager',
    description:
      'This task manager application enables users to efficiently organize and track tasks.',
    image: project4,
    gitHubLink: 'https://github.com/Alaa8884/my-to-do-list-application',
    liveDemoLink: 'https://my-to-do-list-application.vercel.app/',
    tech: ['React', 'JavaScript', 'Css'],
  },
];
