import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-9xl font-bold text-green-600 mb-8">404</h1>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound; 