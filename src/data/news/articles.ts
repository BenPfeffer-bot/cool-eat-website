export interface NewsArticle {
    id: string;
    date: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
    image: string;
    slug: string;
}

export const newsArticles: NewsArticle[] = [
    {
        id: '1',
        date: '2025',
        title: 'CoolEat Launches Smart Locker Solution for Universities',
        excerpt: 'Introducing our innovative food storage solution designed specifically for university campuses, helping students maintain food freshness and reduce waste.',
        content: `
            CoolEat is proud to announce the launch of our innovative smart locker solution specifically designed for university campuses. This groundbreaking system addresses the unique challenges faced by students and faculty members when it comes to food storage and waste reduction.

            Our smart lockers provide:
            - Temperature-controlled storage spaces
            - Mobile app integration for easy access
            - Real-time monitoring capabilities
            - Energy-efficient operation

            The test phase will be launched on ESCP Business Shool, London campus, for one month trial, to reduce food waste and improve student wellbeing.
        `,
        category: 'Product Launch',
        readTime: '1 min read',
        image: '/school.png',
        slug: 'cooleat-launches-university-solution'
    },
    {
        id: '2',
        date: '2025',
        title: 'Reducing Food Waste in Local Restaurants',
        excerpt: 'How our smart locker system is helping local restaurants minimize food waste while maintaining full price margins on their deliveries.',
        content: `
            In an era where sustainability meets innovation, CoolEat's smart locker system is revolutionizing how local restaurants handle food waste and delivery operations.

            Key Achievements:
            - 40% reduction in food waste
            - Increased customer satisfaction
            - Improved operational efficiency
            - Enhanced food safety standards

            Our partnership with local restaurants has shown that smart storage solutions can significantly impact both sustainability goals and bottom-line results.

            The implementation of our system has not only reduced waste but also opened up new opportunities for restaurants to optimize their operations and better serve their customers.
        `,
        category: 'Case Study',
        readTime: '1 min read',
        image: '/fruits.jpg',
        slug: 'reducing-restaurant-food-waste'
    },
    {
        id: '3',
        date: '2025',
        title: 'Partnership with Leading Supermarket Chain',
        excerpt: 'CoolEat partners with a major supermarket chain to implement smart storage solutions for surplus food management.',
        content: `
            We're excited to announce our strategic partnership with one of the UK's leading supermarket chains to implement our smart storage solutions for surplus food management.

            This partnership will:
            - Reduce food waste at scale
            - Improve accessibility to fresh food
            - Enhance storage efficiency
            - Set new industry standards

            The implementation will begin in select stores across London, with plans to expand nationwide over the next 18 months.

            This collaboration marks a significant step forward in our mission to revolutionize food storage and reduce waste across the retail sector.
        `,
        category: 'Partnership',
        readTime: '4 min read',
        image: '/Gray Basket Photo.jpg',
        slug: 'supermarket-chain-partnership'
    }
];

export const featuredArticle: NewsArticle = {
    id: '4',
    date: '2025',
    title: 'The Future of Sustainable Food Storage',
    excerpt: 'Exploring how smart locker technology is revolutionizing food storage and contributing to a more sustainable future.',
    content: `
        The future of food storage is here, and it's smarter than ever. At CoolEat, we're leading the charge in revolutionizing how we store and manage food resources.

        Key Innovations:
        - AI-powered temperature control
        - IoT integration for real-time monitoring
        - Sustainable energy solutions
        - Smart inventory management

        Our latest research and development efforts have focused on creating even more efficient and sustainable storage solutions that will shape the future of food preservation.

        We're not just creating storage solutions; we're building a more sustainable future for food management and consumption.
    `,
    category: 'Innovation',
    readTime: '6 min read',
    image: '/zero waste.png',
    slug: 'future-of-sustainable-storage'
}; 