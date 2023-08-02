import { IoIosInformationCircle, IoIosCheckmarkCircleOutline, IoIosWarning } from 'react-icons/io';

const PrivacyPolicy = () => {
  return (
    <div className="p-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-lg mb-4">
        This Privacy Policy explains how we collect, use, and disclose your personal information when you use our services.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2"><IoIosInformationCircle className="inline mr-2 text-blue-500" /> Information We Collect</h2>
        <p className="text-lg mb-6">
          We may collect personal information that you provide directly to us, such as your name, email address, and any other information you choose to provide.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2"><IoIosCheckmarkCircleOutline className="inline mr-2 text-green-500" /> How We Use Your Information</h2>
        <p className="text-lg mb-6">
          We may use your personal information to provide and improve our services, communicate with you, and send you important updates and promotional materials.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2"><IoIosWarning className="inline mr-2 text-red-500" /> Disclosure of Your Information</h2>
        <p className="text-lg mb-6">
          We do not share your personal information with third parties except as described in this Privacy Policy or as required by law.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Cookies</h2>
      <p className="text-lg mb-6">
        We may use cookies and similar tracking technologies to collect information about your usage of our services.
      </p>
      <h2 className="text-2xl font-bold mb-2">Security</h2>
      <p className="text-lg mb-6">
        We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access.
      </p>
      <h2 className="text-2xl font-bold mb-2">Changes to this Privacy Policy</h2>
      <p className="text-lg mb-6">
        We may update this Privacy Policy from time to time. Any changes will be effective when we post the revised Privacy Policy on this page.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-lg">
        If you have any questions or concerns about this Privacy Policy, please contact us at privacy@example.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;