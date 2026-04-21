import Layout from "@/components/layout/Layout";
import PageSEO from "@/components/seo/PageSEO";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageSEO 
        title="Privacy Policy | Paradise Roofers"
        description="View the privacy policy for Paradise Roofers. Learn about how we protect your data and our mobile messaging privacy policies."
        canonicalUrl="https://paradiseroofers.com/privacy"
      />
      
      {/* Hero Section */}
      <section className="bg-foreground text-background py-24">
        <div className="container">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#FF9C45]"></div>
            <span className="font-bold text-sm uppercase tracking-widest text-[#FF9C45]">Legal</span>
          </div>
          <h1 className="font-['Oswald'] text-6xl md:text-7xl font-bold uppercase leading-[0.9] tracking-wide mb-6">
            Privacy Policy
          </h1>
          <p className="text-background/70 text-lg max-w-2xl">
            Last Updated: April 20, 2026. Your privacy is important to us.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-12">
            
            {/* Mobile Messaging Privacy - TCR REQUIREMENT */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Mobile Messaging Privacy</h2>
              <div className="bg-muted p-6 border-l-4 border-[#FF9C45]">
                <p className="text-foreground font-medium leading-relaxed">
                  Personal information and mobile opt-in data will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            </div>

            {/* General Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect personal information that you provide to us directly, such as when you fill out our "Request Free Estimate" form or contact us via email. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information (Email address, Phone number).</li>
                <li>Project details and roofing requirements.</li>
                <li>Property address and location details.</li>
                <li>Any other information you choose to share with us regarding your roofing inquiry.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We use this information to respond to your inquiries, provide project estimates, schedule drone inspections, and send updates regarding your roofing projects.
              </p>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is limited to authorized personnel only. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-foreground text-background p-8 rounded-sm">
              <h2 className="text-xl font-bold mb-4 uppercase">Questions?</h2>
              <p className="text-background/70 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1">
                <p className="font-bold text-primary">Paradise Roofers</p>
                <p>73 Richmond ST.W Suit No. 6, Toronto, ON. Canada</p>
                <p>Phone: 437-564-2790</p>
                <p>Email: sales@paradiseroofers.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
