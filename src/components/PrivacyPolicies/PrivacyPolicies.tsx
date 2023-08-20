import { motion } from "framer-motion";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircle,
  IoIosWarning,
} from "react-icons/io";
import { animation } from "../../utils/animation";

const PrivacyPolicy = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" className="p-7 md:p-16">
      <motion.h1
        variants={animation}
        className="mb-8 text-xl font-bold md:text-4xl"
      >
        Privacy Policy
      </motion.h1>
      <motion.p variants={animation} className="mb-4 md:text-lg">
        This Privacy Policy explains how we collect, use, and disclose your
        personal information when you use our services.
      </motion.p>
      <div className="mb-8">
        <motion.h2
          variants={animation}
          custom={1}
          className="mb-2 font-bold md:text-2xl"
        >
          <IoIosInformationCircle className="mr-2 inline text-blue-500" />{" "}
          Information We Collect
        </motion.h2>
        <motion.p
          variants={animation}
          custom={2}
          className="mb-6 text-[12px] md:text-lg"
        >
          We may collect personal information that you provide directly to us,
          such as your name, email address, and any other information you choose
          to provide.
        </motion.p>
      </div>
      <div className="mb-8">
        <motion.h2
          variants={animation}
          custom={2}
          className="mb-2 font-bold md:text-2xl"
        >
          <IoIosCheckmarkCircleOutline className="mr-2 inline text-green-500" />{" "}
          How We Use Your Information
        </motion.h2>
        <motion.p
          variants={animation}
          custom={3}
          className="mb-6 text-[12px] md:text-lg"
        >
          We may use your personal information to provide and improve our
          services, communicate with you, and send you important updates and
          promotional materials.
        </motion.p>
      </div>
      <div className="mb-8">
        <motion.h2
          variants={animation}
          custom={3}
          className="mb-2 font-bold md:text-2xl"
        >
          <IoIosWarning className="mr-2 inline text-red-500" /> Disclosure of
          Your Information
        </motion.h2>
        <motion.p
          variants={animation}
          custom={4}
          className="mb-6 text-[12px] md:text-lg"
        >
          We do not share your personal information with third parties except as
          described in this Privacy Policy or as required by law.
        </motion.p>
      </div>
      <motion.h2
        variants={animation}
        custom={4}
        className="mb-2 font-bold md:text-2xl"
      >
        Cookies
      </motion.h2>
      <motion.p
        variants={animation}
        custom={5}
        className="mb-6 text-[12px] md:text-lg"
      >
        We may use cookies and similar tracking technologies to collect
        information about your usage of our services.
      </motion.p>
      <motion.h2
        variants={animation}
        custom={5}
        className="mb-2 font-bold md:text-2xl"
      >
        Security
      </motion.h2>
      <motion.p
        variants={animation}
        custom={6}
        className="mb-6 text-[12px] md:text-lg"
      >
        We take reasonable measures to protect your personal information from
        loss, theft, misuse, and unauthorized access.
      </motion.p>
      <motion.h2
        variants={animation}
        custom={6}
        className="mb-2 font-bold md:text-2xl"
      >
        Changes to this Privacy Policy
      </motion.h2>
      <motion.p
        variants={animation}
        custom={7}
        className="mb-6 text-[12px] md:text-lg"
      >
        We may update this Privacy Policy from time to time. Any changes will be
        effective when we post the revised Privacy Policy on this page.
      </motion.p>
      <motion.h2
        variants={animation}
        custom={7}
        className="mb-2 font-bold md:text-2xl"
      >
        Contact Us
      </motion.h2>
      <motion.p
        variants={animation}
        custom={8}
        className="text-[12px] md:text-lg"
      >
        If you have any questions or concerns about this Privacy Policy, please
        contact us at privacy@example.com.
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicy;
