import project1 from '../images/rent_car.webp';
import project2 from '../images/masrawy_fast_food.webp';
import project3 from '../images/resize.webp';
import project4 from '../images/task_manager.webp';
import project5 from '../images/hotel_admin.webp';
import project6 from '../images/narita_group.webp';

export const MENULINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
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
    name: 'Hotel admin dashboard',
    description:
      'Managing hotel inventory of chalets or rooms, including pricing, capacity, manage user accounts.',
    image: project5,
    gitHubLink:
      'https://github.com/Alaa8884/React-ain-sokhna-hotel-reservationSite',
    liveDemoLink:
      'https://ain-sokhna-hotel-reservation-dashboard.vercel.app/login',
    tech: ['React', 'Redux & Context-API', 'Styled Components', ' Supabase'],
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
  {
    name: 'Narita Group company',
    description:
      '(Clone/ Reimplement) of Narita-Group website  with a new design created by me and added new JavaScript feature.',
    image: project6,
    gitHubLink: 'https://github.com/Alaa8884/Narita-group-Website',
    liveDemoLink: 'https://alaa8884.github.io/Narita-group-Website/',
    tech: ['JavaScript', "Html", 'Css', "Font awesome"],
  },
];
