import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const useCart = () =>{
    const {user, loading} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],

        // queryFn: async () =>{
        //     const res = await fetch(`https://bistro-boss-server-green.vercel.app/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        enabled : !! user?.email,
        queryFn: async () =>{
            if(user?.email){
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res);
            return res.data;
        }
        return [];
        },
      })

      return [cart, refetch]
}

export default useCart;