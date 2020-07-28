import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const withPrivateRoute = WrappedComponent => {

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

    return ({ ...props }) => !loading && <WrappedComponent test={test} {...props}/>;
};

export default withPrivateRoute;
