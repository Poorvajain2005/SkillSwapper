import type { UserProfile, SkillSwap } from '@/lib/types';

export const mockUsers: UserProfile[] = [
  {
    id: 'admin-001',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    location: 'Platform HQ',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['Platform Management'],
    skillsWanted: ['User Feedback'],
    availability: ['24/7'],
    isPublic: false,
    bio: 'The administrator for the Skill Swap Platform.',
    ratings: { average: 5.0, count: 99 },
  },
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'user',
    status: 'active',
    location: 'Mumbai, MH',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['React', 'Node.js', 'UI/UX Design'],
    skillsWanted: ['Photography', 'Public Speaking'],
    availability: ['Weekends', 'Weekday Evenings'],
    isPublic: true,
    bio: 'Full-stack developer with a passion for creating beautiful and intuitive user interfaces. Looking to learn photography in my spare time.',
    ratings: { average: 4.8, count: 12 },
  },
  {
    id: '2',
    name: 'Rohan Kumar',
    email: 'rohan@example.com',
    role: 'user',
    status: 'active',
    location: 'Bengaluru, KA',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['Photography', 'Photo Editing', 'Photoshop'],
    skillsWanted: ['Web Development', 'React'],
    availability: ['Weekdays'],
    isPublic: true,
    bio: 'Professional photographer specializing in portraits and landscapes. Eager to build my own portfolio website.',
    ratings: { average: 4.9, count: 25 },
  },
  {
    id: '3',
    name: 'Ananya Reddy',
    email: 'ananya@example.com',
    role: 'user',
    status: 'active',
    location: 'Hyderabad, TS',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['Public Speaking', 'Content Writing', 'SEO'],
    skillsWanted: ['Graphic Design', 'Data Analysis'],
    availability: ['Weekends'],
    isPublic: true,
    bio: 'Marketing specialist and content creator. I can help you craft a compelling story. I want to learn data-driven marketing.',
    ratings: { average: 4.7, count: 8 },
  },
  {
    id: '4',
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    role: 'user',
    status: 'active',
    location: 'Delhi, DL',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['Data Analysis', 'Python', 'Excel'],
    skillsWanted: ['Project Management', 'Agile Methodologies'],
    availability: ['Weekday Evenings'],
    isPublic: true,
    bio: 'Data scientist with a background in statistics. Looking to transition into a project management role.',
    ratings: { average: 5.0, count: 15 },
  },
   {
    id: '5',
    name: 'Meera Desai',
    email: 'meera@example.com',
    role: 'user',
    status: 'active',
    location: 'Pune, MH',
    profilePhotoUrl: 'https://placehold.co/128x128.png',
    skillsOffered: ['Project Management', 'Agile', 'Scrum'],
    skillsWanted: ['UI/UX Design', 'Figma'],
    availability: ['Weekends'],
    isPublic: false,
    bio: 'Experienced project manager in the tech industry. I can help your team deliver on time. I want to learn design principles.',
    ratings: { average: 4.6, count: 20 },
  }
];

export const mockSwaps: SkillSwap[] = [
  {
    id: 'swap1',
    requesterId: '1',
    requesterName: 'Priya Sharma',
    requesterPhotoUrl: 'https://placehold.co/128x128.png',
    receiverId: '2',
    receiverName: 'Rohan Kumar',
    receiverPhotoUrl: 'https://placehold.co/128x128.png',
    offeredSkill: 'React',
    requestedSkill: 'Photography',
    message: 'Hey Rohan, I love your portfolio! I can help you build a stunning website with React in exchange for some photography lessons.',
    status: 'pending',
    createdAt: new Date('2023-10-26T10:00:00Z'),
    updatedAt: new Date('2023-10-26T10:00:00Z'),
  },
  {
    id: 'swap2',
    requesterId: '3',
    requesterName: 'Ananya Reddy',
    requesterPhotoUrl: 'https://placehold.co/128x128.png',
    receiverId: '1',
    receiverName: 'Priya Sharma',
    receiverPhotoUrl: 'https://placehold.co/128x128.png',
    offeredSkill: 'Content Writing',
    requestedSkill: 'UI/UX Design',
    message: 'Hi Priya, I can help you with blog posts for your projects to improve your online presence. I would love to learn some UI/UX basics from you.',
    status: 'accepted',
    createdAt: new Date('2023-10-25T14:30:00Z'),
    updatedAt: new Date('2023-10-25T18:00:00Z'),
  },
   {
    id: 'swap3',
    requesterId: '4',
    requesterName: 'Vikram Singh',
    requesterPhotoUrl: 'https://placehold.co/128x128.png',
    receiverId: '1',
    receiverName: 'Priya Sharma',
    receiverPhotoUrl: 'https://placehold.co/128x128.png',
    offeredSkill: 'Python',
    requestedSkill: 'Node.js',
    message: 'Hey Priya, I see you are skilled in Node.js. I am a Python expert and would love to swap knowledge.',
    status: 'rejected',
    createdAt: new Date('2023-10-24T09:00:00Z'),
    updatedAt: new Date('2023-10-24T12:00:00Z'),
  },
];
