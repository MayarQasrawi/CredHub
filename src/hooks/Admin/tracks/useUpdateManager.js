import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../auth/utils/axiosInstance";

async function updateTrackManager(info) {
  console.log("info inside update manager /////////////////", info);
  const token = localStorage.getItem("token");

  const { data } = await axiosInstance.put("Seniors/update", info, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
export default function useUpdateManager() {
  return useMutation({
    mutationFn: (data) => updateTrackManager(data),
    retry: false,
    onError: (error) => {
      console.log(error, "update manager");
    },
    onSuccess: (data) => {
      console.log(data, "update manager");
    },
  });
}
