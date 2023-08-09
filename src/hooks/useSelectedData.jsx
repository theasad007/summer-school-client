import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedData = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: selectedCourse = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selected?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },
    })
    return [selectedCourse, refetch]
}
export default useSelectedData;