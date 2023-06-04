import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const UseAdmin = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;