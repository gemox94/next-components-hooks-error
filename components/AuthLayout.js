import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthLayout = ({ children }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log(user);

        if (!user) {
            router.push('/login');
        } else {
            setLoading(false);
        }

    }, []);

    return !loading && (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default AuthLayout;
