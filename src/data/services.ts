export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    icon: '💻',
    services: [
      {
        id: 'web-development',
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies',
        icon: '🌐',
        features: [
          'Responsive web applications',
          'Progressive Web Apps (PWA)',
          'E-commerce solutions',
          'Content Management Systems',
          'API development and integration',
          'Web application maintenance',
        ],
      },
      {
        id: 'mobile-development',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications',
        icon: '📱',
        features: [
          'iOS application development',
          'Android application development',
          'Cross-platform solutions',
          'Mobile app maintenance',
          'Push notification integration',
          'App store optimization',
        ],
      },
      {
        id: 'desktop-applications',
        title: 'Desktop Applications',
        description: 'Powerful desktop software solutions',
        icon: '🖥️',
        features: [
          'Windows applications',
          'macOS applications',
          'Cross-platform desktop apps',
          'System integration',
          'Automation tools',
          'Legacy system modernization',
        ],
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Creative design solutions for digital products',
    icon: '🎨',
    services: [
      {
        id: 'ui-design',
        title: 'UI Design',
        description: 'Beautiful and intuitive user interfaces',
        icon: '✨',
        features: [
          'User interface design',
          'Design systems',
          'Component libraries',
          'Style guides',
          'Interactive prototypes',
          'Design handoff',
        ],
      },
      {
        id: 'ux-design',
        title: 'UX Design',
        description: 'User-centered design solutions',
        icon: '🧠',
        features: [
          'User research',
          'Information architecture',
          'Wireframing',
          'Usability testing',
          'User journey mapping',
          'Interaction design',
        ],
      },
      {
        id: 'branding',
        title: 'Branding',
        description: 'Comprehensive brand identity solutions',
        icon: '🎯',
        features: [
          'Brand strategy',
          'Logo design',
          'Visual identity',
          'Brand guidelines',
          'Marketing materials',
          'Brand voice development',
        ],
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Ongoing support and maintenance services',
    icon: '🔧',
    services: [
      {
        id: 'quality-assurance',
        title: 'Quality Assurance',
        description: 'Comprehensive testing and quality control',
        icon: '✅',
        features: [
          'Manual testing',
          'Automated testing',
          'Performance testing',
          'Security testing',
          'User acceptance testing',
          'Test automation frameworks',
        ],
      },
      {
        id: 'technical-support',
        title: 'Technical Support',
        description: '24/7 technical support and maintenance',
        icon: '🛠️',
        features: [
          'Bug fixing',
          'Performance optimization',
          'Security updates',
          'Feature enhancements',
          'System monitoring',
          'Emergency support',
        ],
      },
      {
        id: 'system-maintenance',
        title: 'System Maintenance',
        description: 'Regular system maintenance and updates',
        icon: '⚙️',
        features: [
          'Regular updates',
          'Security patches',
          'Database maintenance',
          'Backup and recovery',
          'System optimization',
          'Documentation updates',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions',
    icon: '📈',
    services: [
      {
        id: 'seo',
        title: 'SEO',
        description: 'Search engine optimization services',
        icon: '🔍',
        features: [
          'Keyword research',
          'On-page optimization',
          'Technical SEO',
          'Content optimization',
          'Link building',
          'SEO analytics',
        ],
      },
      {
        id: 'social-media',
        title: 'Social Media Marketing',
        description: 'Strategic social media management',
        icon: '📱',
        features: [
          'Social media strategy',
          'Content creation',
          'Community management',
          'Paid advertising',
          'Analytics and reporting',
          'Influencer marketing',
        ],
      },
      {
        id: 'content-marketing',
        title: 'Content Marketing',
        description: 'Strategic content creation and distribution',
        icon: '📝',
        features: [
          'Content strategy',
          'Blog writing',
          'Email marketing',
          'Video production',
          'Infographic design',
          'Content distribution',
        ],
      },
    ],
  },
]; 