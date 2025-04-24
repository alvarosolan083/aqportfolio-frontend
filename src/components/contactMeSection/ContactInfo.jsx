import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="alvarosolano569@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+56 9 6831 6581" Image={FiPhone} />
      <SingleInfo text="Santiago, Chile" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
