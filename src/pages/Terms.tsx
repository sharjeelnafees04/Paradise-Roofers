import Layout from "@/components/layout/Layout";
import PageSEO from "@/components/seo/PageSEO";

export default function Terms() {
  return (
    <Layout>
      <PageSEO 
        title="Terms of Service | Paradise Roofers"
        description="View the terms of service for Paradise Roofers. Learn about our SMS messaging policies and terms and conditions."
        canonicalUrl="https://paradiseroofers.com/terms"
      />
      
      {/* Hero Section */}
      <section className="bg-foreground text-background py-24">
        <div className="container">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#FF9C45]"></div>
            <span className="font-bold text-sm uppercase tracking-widest text-[#FF9C45]">Legal</span>
          </div>
          <h1 className="font-['Oswald'] text-6xl md:text-7xl font-bold uppercase leading-[0.9] tracking-wide mb-6">
            Terms of Service
          </h1>
          <p className="text-background/70 text-lg max-w-2xl">
            Last Updated: April 20, 2026. Please read these terms carefully.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-12">
            
            {/* SMS Terms - TCR REQUIREMENT */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">SMS Terms</h2>
              <ul className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>
                  <span className="text-foreground font-semibold">Purpose:</span> Paradise Roofers alerts are used for appointment reminders, drone inspection reports, and project status updates.
                </li>
                <li>
                  <span className="text-foreground font-semibold">Cancellation:</span> Users can cancel the SMS service at any time by texting STOP.
                </li>
                <li>
                  <span className="text-foreground font-semibold">Support:</span> For support, users can text HELP or email <a href="mailto:sales@paradiseroofers.com" className="text-primary underline">sales@paradiseroofers.com</a>.
                </li>
                <li>
                  <span className="text-foreground font-semibold">Liability:</span> Carriers are not liable for delayed or undelivered messages.
                </li>
              </ul>
            </div>

            {/* SMS Terms & Conditions - TCR REQUIREMENT */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">SMS Terms & Conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you consent to receive SMS from Paradise Roofers, you agree to receive roofing inquiry and project updates SMS from us. Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit <a href="https://paradiseroofers.com/privacy" className="text-primary underline">https://paradiseroofers.com/privacy</a> to see our privacy policy and terms and conditions.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-foreground text-background p-8 rounded-sm">
              <h2 className="text-xl font-bold mb-4 uppercase">Questions?</h2>
              <p className="text-background/70 mb-4">
                If you have any questions about our Terms of Service, please contact us at:
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
