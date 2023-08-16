import { IoIosInformationCircle, IoIosCheckmarkCircleOutline, IoIosWarning } from 'react-icons/io';
import { motion } from 'framer-motion';
import { animation } from "../../utils/animation";

const PrivacyPolicy = () => {
  return (
    <motion.div initial='hidden'
    whileInView='visible' className="md:p-16 p-7">
      <motion.h1 variants={animation} className="md:text-4xl text-xl font-bold mb-8">Privacy Policy</motion.h1>
      <motion.p variants={animation} className="md:text-lg mb-4">
        This Privacy Policy explains how we collect, use, and disclose your personal information when you use our services.
      </motion.p>
      <div className="mb-8">
        <motion.h2 variants={animation} custom={1} className="md:text-2xl font-bold mb-2"><IoIosInformationCircle className="inline mr-2 text-blue-500" /> Information We Collect</motion.h2>
        <motion.p variants={animation} custom={2} className="md:text-lg text-[12px] mb-6">
          We may collect personal information that you provide directly to us, such as your name, email address, and any other information you choose to provide.
        </motion.p>
      </div>
      <div className="mb-8">
        <motion.h2 variants={animation} custom={2} className="md:text-2xl font-bold mb-2"><IoIosCheckmarkCircleOutline className="inline mr-2 text-green-500" /> How We Use Your Information</motion.h2>
        <motion.p variants={animation} custom={3} className="md:text-lg text-[12px] mb-6">
          We may use your personal information to provide and improve our services, communicate with you, and send you important updates and promotional materials.
        </motion.p>
      </div>
      <div className="mb-8">
        <motion.h2 variants={animation} custom={3} className="md:text-2xl font-bold mb-2"><IoIosWarning className="inline mr-2 text-red-500" /> Disclosure of Your Information</motion.h2>
        <motion.p variants={animation} custom={4} className="md:text-lg text-[12px] mb-6">
          We do not share your personal information with third parties except as described in this Privacy Policy or as required by law.
        </motion.p>
      </div>
      <motion.h2 variants={animation} custom={4} className="md:text-2xl font-bold mb-2">Cookies</motion.h2>
      <motion.p variants={animation} custom={5} className="md:text-lg text-[12px] mb-6">
        We may use cookies and similar tracking technologies to collect information about your usage of our services.
      </motion.p>
      <motion.h2 variants={animation} custom={5} className="md:text-2xl font-bold mb-2">Security</motion.h2>
      <motion.p variants={animation} custom={6} className="md:text-lg text-[12px] mb-6">
        We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access.
      </motion.p>
      <motion.h2 variants={animation} custom={6} className="md:text-2xl font-bold mb-2">Changes to this Privacy Policy</motion.h2>
      <motion.p variants={animation} custom={7} className="md:text-lg text-[12px] mb-6">
        We may update this Privacy Policy from time to time. Any changes will be effective when we post the revised Privacy Policy on this page.
      </motion.p>
      <motion.h2 variants={animation} custom={7} className="md:text-2xl font-bold mb-2">Contact Us</motion.h2>
      <motion.p variants={animation} custom={8} className="md:text-lg text-[12px]">
        If you have any questions or concerns about this Privacy Policy, please contact us at privacy@example.com.
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicy;