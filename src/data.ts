const tech = [
  'TypeScript',
  'Javascript',
  'Java',
  'Ruby',
  'Python',
  'Rust',
  'Vue.js',
  'React',
  'AWS Cloud (Lambda, S3, DynamoDB, etc.)',
  'AWS SDK & CDK',
  'Serverless',
  'PostgreSQL',
  'Web Development',
];

const experience = [
  {
    position: 'Team Lead for Back End Development',
    description:
      "At SM DAC, I work on developing back end solutions for our upcoming product. I currently lead a team who work closely with the company's stakeholders to engineer features, infrastructure, and integrations between other deparments within the SM group of companies. I am responsible for the design of the microservices architecture and framework which the team uses to rapidly build APIs.",
    company: 'SM Digital Advantage Corp.',
    date: 'Aug 2023 — Present',
    techStack: ['TypeScript', 'Rust', 'Java', 'AWS', 'Serverless'],
    isVisible: false,
  },
  {
    position: 'Full Stack Developer',
    description:
      'As a Full Stack Developer, I redeveloped critical microservices for their storefront using Rust and several AWS technologies alongside createing infrastructure using AWS CloudFormation and the AWS CDK. To further raise developer confidence with the features they released, I created testing tools with Rust, Java and Cucumber. I have also had the opportunity to work on the Adobe Commerce (Magento) framework.',
    company: 'SM Retail Inc.',
    date: 'Feb 2023 — Aug 2023',
    techStack: [
      'TypeScript',
      'Rust',
      'Java',
      'AWS',
      'Cucumber/Gherkin',
      'PHP',
      'Adobe Commerce (Magento)',
    ],
    isVisible: false,
  },
  {
    position: 'Full Stack Developer',
    description:
      'I mainly worked on B2B features in BeautyMnl. During my stay, I was able to optimize their sale events that occured almost monthly. I was also able to work with the team tasked for performance improvements of the website. Together with the team, I integrated Algolia to their website search and also conducted load tests to assess site performance.',
    company: 'BeautyMnl',
    date: 'Jun 2021 — Jan 2023',
    techStack: [
      'Ruby on Rails',
      'ActiveRecord',
      'Sidekiq',
      'Vue.js',
      'K6',
      'AWS',
      'Algolia',
    ],
    isVisible: false,
  },
];

export {tech, experience};
