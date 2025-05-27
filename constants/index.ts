export const navLinks = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/profit',
    label: 'Profit',
  },
  {
    route: '/inventory',
    label: 'Inventory',
  },
  {
    route: '/expenses',
    label: 'Expenses',
  },
  {
    route: '/invoice',
    label: 'Invoice',
  },
];
export const whyChooseUs = [
  {
    id: '1',
    label: '100% Automated Profit Management & Expenses Tracking ',
  },
  {
    id: '2',
    label: 'User-Friendly & Designed for Small Businesses',
  },
  {
    id: '3',
    label: 'Instant Digital Receipts & Invoice Generation ',
  },
  {
    id: '4',
    label: 'Smart Notifications & Alert ',
  },
];

type Testimonial = {
  id: number;
  name: string;
  text: string;
  avatarUrl: string;
  position: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah O.',
    text: 'This platform has completely transform the way I track my sales and expenses! I no longer stress over financial reports',
    avatarUrl: '/sarah-o.jpg',
    position: 'Boutique Owner',
  },
  {
    id: 2,
    name: 'James K.',
    text: 'I used to spend hours managing my investory and invoices manually, now I can focus on growing my business.',
    avatarUrl: '/james-k.jpg',
    position: 'Restaurant Owner',
  },
  {
    id: 3,
    name: 'Aisha M.',
    text: 'The profit and expenses insights have helped me optimize my pricing strategy. My revenue has increased by 30% in just three months!',
    avatarUrl: '/aisha-m.jpg',
    position: 'E-commerce Enterpreneur',
  },
  {
    id: 4,
    name: 'Aisha M.',
    text: 'The profit and expenses insights have helped me optimize my pricing strategy. My revenue has increased by 30% in just three months!',
    avatarUrl: '/aisha-m.jpg',
    position: 'E-commerce Enterpreneur',
  },
  {
    id: 5,
    name: 'Aisha M.',
    text: 'The profit and expenses insights have helped me optimize my pricing strategy. My revenue has increased by 30% in just three months!',
    avatarUrl: '/aisha-m.jpg',
    position: 'E-commerce Enterpreneur',
  },
  {
    id: 6,
    name: 'Aisha M.',
    text: 'The profit and expenses insights have helped me optimize my pricing strategy. My revenue has increased by 30% in just three months!',
    avatarUrl: '/aisha-m.jpg',
    position: 'E-commerce Enterpreneur',
  },
];

export const questions = [
  {
    id: '1',
    question: 'Is this platform suitable for all times of businesses?',
    answer:
      'Absolutely yes, this platform is suitable for all kinds small and medium scale businesses.',
  },
  {
    id: '2',
    question: 'How is my daily businesses calculated?',
    answer:
      'We use a combination of your sales data, expenses, and inventory levels to provide you with accurate daily profit calculations.',
  },
  {
    id: '3',
    question: 'Can I set low-stock alerts for my inventory?',
    answer:
      'Yes, you can set low-stock alerts for your inventory. Our system will notify you when stock levels fall below a certain threshold, helping you manage your inventory effectively.',
  },
  {
    id: '4',
    question: 'How can I get support if I have issues?',
    answer:
      'You can reach out to our support team through the contact form on our website or via email. We are here to assist you with any issues you may encounter.',
  },
];

export const transactions = [
  { date: '11/03/25', type: 'Sales (Invoice 1024)', amount: '₦15,000', id: 1 },
  { date: '11/03/25', type: 'Expenses (Supplies)', amount: '₦54,000', id: 2 },
  { date: '10/03/25', type: 'Sales (POS Payment)', amount: '₦70,000', id: 3 },
];

export const stockSumary = [
  {
    id: '1',
    path: '/vector-4.svg',
    title: 'Total Products',
    title2: 'Products',
    counts: '125 Items',
  },
  {
    id: '2',
    path: '/vector-2.svg',
    title: 'Last',
    title2: 'Restoked',
    counts: '3 Days Ago',
  },
  {
    id: '3',
    path: '/vector3.svg',
    title: 'Low-Stock',
    title2: 'Items',
    counts: '15 Items',
  },
  {
    id: '4',
    path: '/vector-3.svg',
    title: 'Best-Selling ',
    title2: 'Items',
    counts: 'EarBuds',
  },
];

export const leastSoldMost = {
  labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6'],
  datasets: [
    {
      label: 'Most Sold',
      data: [, 40, 20, 80, 60, 80],
      borderColor: 'purple',
      borderWidth: 0.5,
    },
    {
      label: 'Least Sold',
      data: [, 20, 57, 20, 38, 29],
      borderColor: '#f1d3ff',
      borderWidth: 1,
    },
  ],
};

export const restockItems = [
  {
    product: 'T-Shirt A (Red)',
    stockLevel: 15,
    supplier: 'XYZ Textiles',
    restockDate: '3 Days Left',
  },
  {
    product: 'Wireless EarBuds',
    stockLevel: 50,
    supplier: 'AudioTech',
    restockDate: '1 Week Ago',
  },
  {
    product: 'Office Desk',
    stockLevel: 0,
    supplier: 'HomeOffice Co.',
    restockDate: 'Urgent Restock',
  },
];

export const expensesItems = [
  {
    service: 'Google Workspace',
    cost: '20,000/mo',
    nextPayment: 'April 10',
    status: 'red',
  },
  {
    service: 'Website Hosting',
    cost: '50,000/yr',
    nextPayment: 'April 15',
    status: 'yellow',
  },
  {
    service: 'Logistic Company',
    cost: '15,000/mo',
    nextPayment: 'March 20',
    status: 'red',
  },
];
