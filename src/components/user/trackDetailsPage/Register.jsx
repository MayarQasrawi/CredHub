import { FaBriefcase, FaRocket } from "react-icons/fa";
import Button from "./shared/Button";
import { useState } from "react";
import Modal from "../../shared/modal/Modal";
import { MdClose } from "react-icons/md";
import { useAuthContext } from "../../../contexts/AuthProvider";
import  EnrollmentModal from "./shared/EnrollmentModal";

export default function Register() {
  const [show, setShow] = useState(false);
  const { auth } = useAuthContext();

  return (
    <>
      {show && (
        <Modal>{auth ?<EnrollmentModal  setShow={setShow}  title='Enroll Now &#10148;' description="Our unique assessment tracks are not just about learning—they're about discovering the essence of your strengths and matching them against the pulse of today's market demands. Register and log in to experience an evaluation crafted by industry visionaries, and step confidently into a future aligned with professional excellence." />  : < EnrollmentModal title='&#128274; LoginRequire' description='Please Signin First.'  setShow={setShow} />}</Modal>
      )}
      <section className="mt-20 w-[90%] mx-auto py-14 px-5 bg-[#003F7D] rounded-2xl">
        <div className="flex flex-wrap justify-center items-center">
          <div className="text-white w-[60%] text-2xl font-medium ">
            <p className="w-[90%]">Want to know more about the Tracks?</p>
          </div>
          <div>
            <Button py="9" px="40" showModal={() => setShow(true)} />
          </div>
        </div>
      </section>
    </>
  );
}
