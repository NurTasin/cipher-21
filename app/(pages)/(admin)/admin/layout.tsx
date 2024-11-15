import ProtectedLayout from "@/components/protectedLayout";

const Layout = ({
    children,
}:{
    children: React.ReactNode
}) => {
    return (
        <ProtectedLayout checkAdmin={true} redirectTo="/not_an_admin">
            {children}
        </ProtectedLayout>
    );
}

export default Layout;
