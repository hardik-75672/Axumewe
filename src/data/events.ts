export interface Event {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    format: string;
    description: string;
    category: string;
    attendees?: number;
    featured?: boolean;
  }
  
  export const events: Event[] = [
    {
      id: '1',
      title: 'Design Futures Summit',
      subtitle: 'Regenerative & Sustainable Design',
      date: 'MAR 15-16',
      time: '9:00 AM',
      location: 'San Francisco, CA',
      format: 'Hybrid (In-person + Virtual)',
      description: 'A flagship 2-day immersive global festival exploring sustainable, regenerative, and sentient design methodologies for the future.',
      category: 'Conference',
      attendees: 500,
      featured: true,
    },
    {
      id: '2',
      title: 'AI-Powered Design Workshop',
      subtitle: 'Creative Intelligence Bootcamp',
      date: 'APR 22-24',
      time: '10:00 AM',
      location: 'New York, NY',
      format: 'In-person',
      description: 'Sprint-style design residency for creative teams exploring the intersection of artificial intelligence and human creativity.',
      category: 'Workshop',
      attendees: 120,
    },
    {
      id: '3',
      title: 'Sustainable Tech Symposium',
      subtitle: 'Policy, Governance & Digital Innovation',
      date: 'MAY 18-20',
      time: '2:00 PM',
      location: 'Austin, TX',
      format: 'Hybrid (Austin + Virtual)',
      description: 'Policy, governance, and digital innovation discussions focused on future-proof sustainable technology solutions.',
      category: 'Symposium',
      attendees: 300,
    },
    {
      id: '4',
      title: 'Creative Leadership Forum',
      subtitle: 'Building Tomorrow\'s Design Teams',
      date: 'JUN 10-12',
      time: '9:30 AM',
      location: 'Seattle, WA',
      format: 'In-person',
      description: 'Strategic leadership development for creative professionals navigating the evolving landscape of design and technology.',
      category: 'Forum',
      attendees: 200,
    },
    {
      id: '5',
      title: 'Innovation Showcase',
      subtitle: 'Emerging Technologies & Design',
      date: 'JUL 5-7',
      time: '11:00 AM',
      location: 'Los Angeles, CA',
      format: 'Hybrid (LA + Virtual)',
      description: 'Presentation of breakthrough innovations and cutting-edge design solutions from leading technology companies.',
      category: 'Showcase',
      attendees: 450,
      featured: true,
    },
    {
      id: '6',
      title: 'Design Ethics Conference',
      subtitle: 'Responsible Innovation in the Digital Age',
      date: 'AUG 15-17',
      time: '1:00 PM',
      location: 'Boston, MA',
      format: 'Virtual',
      description: 'Critical discussions on ethical design practices, responsible AI development, and the social impact of technology.',
      category: 'Conference',
      attendees: 350,
    },
  ];
  
  export const categories = Array.from(new Set(events.map(event => event.category)));