import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./utils/axiosInstance.js"; // Import the Axios instance
import { useAuthContext } from '../../contexts/AuthProvider.jsx'

async function deleteAccount(id) {
  const response = await axiosInstance.delete(`/Users/${id}`);
  return response;
}

export default function useDelteAccount(){
    return useMutation({
        mutationFn:(id)=> deleteAccount(id),
        retry: false,
        onError: (error) => {
                console.error("Server responded with:", error);
        },
        onSuccess: (data) => {
            console.log("DelteAccount successful:", data);
        }
    })
}