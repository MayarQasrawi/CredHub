// src/hooks/useBookInterview.js
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../auth/utils/axiosInstance";

const bookInterview = async ({ applicantId, interviewId, appointmentId ,stageProgressId}) => {
  const response = await axiosInstance.post(
    `/InterviewBookings/${applicantId}`,
    {
      interviewId,
      applicantId,
      appointmentId,
      stageProgressId,
    }
  );
  return response.data;
};

const useBookInterview = (options = {}) => {
  return useMutation({
    mutationFn: bookInterview,
    ...options,
  });

};

export default useBookInterview;
