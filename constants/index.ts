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
