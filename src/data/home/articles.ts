export interface HomeArticle {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    date: string;
}

export const homeArticles: HomeArticle[] = [
    {
        id: '1',
        title: 'Revolutionizing Food Storage',
        description: 'Discover how our smart locker system is transforming workplace food storage and reducing waste.',
        image: '/proto.jpg',
        link: '/products',
        category: 'Innovation',
        date: 'March 2024'
    },
    {
        id: '2',
        title: 'University Success Story',
        description: 'See how leading universities are benefiting from our sustainable storage solutions.',
        image: '/uni.webp',
        link: '/news/cooleat-launches-university-solution',
        category: 'Case Study',
        date: 'March 2024'
    },
    {
        id: '3',
        title: 'Our Mission',
        description: 'Learn about our commitment to reducing food waste and creating sustainable solutions.',
        image: '/mission.webp',
        link: '/about',
        category: 'Company',
        date: 'March 2024'
    }
]; 