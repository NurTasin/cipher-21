import ProtectedLayout from '@/components/protectedLayout';
import React from 'react';

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <ProtectedLayout redirectTo = {"/dashboard"} onSuccess={true}>
            {children}
        </ProtectedLayout>
    );
}

export default Layout;
