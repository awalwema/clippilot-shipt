import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 2024-06-04

Welcome to the privacy policy of ClipPilot. Your privacy is critically important to us. This privacy policy document outlines the types of personal information that is received and collected by ClipPilot and how it is used.

1. Your Data: Secure and Local

At ClipPilot, we prioritize your privacy and data security. Here's how we handle your data:

- Local Storage: Your clipboard history stays entirely on your device. We do not store your clipboard data on any cloud or remote servers.
- No Third-Party Access: No third parties have access to your clipboard data. Your information remains confidential and inaccessible to outside entities.
- Customizable Privacy Settings: You have full control over your privacy settings. Customize your settings to keep certain apps private, ensuring that what you copy is for your eyes only.
- Data Protection: We take all reasonable steps to protect your personal information and keep your clipboard history secure.

2. Information Collection and Use

For a better experience while using ClipPilot, we may require you to provide us with certain personally identifiable information, including but not limited to your name and email. The information that we collect will be used to contact or identify you.

3. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.

4. Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact me at:

Email: gratatouille23@gmail.com

X/Twitter: @gratatouille23

By using ClipPilot, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
