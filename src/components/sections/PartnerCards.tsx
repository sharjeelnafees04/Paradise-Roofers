import { ExternalLink } from "lucide-react";
import LogoBar from "./LogoBar";

const partners = [
  {
    name: "Paradise Construction",
    url: "https://paradiseconstruction.com/",
    logo: "/footerlogos/paradiseC.png",
    description: "Premier construction company delivering exceptional residential and commercial building solutions with quality craftsmanship and innovative design since 1998."
  },
  {
    name: "Paradise Estimating",
    url: "https://paradiseestimating.com/",
    logo: "/footerlogos/paradiseE.webp",
    description: "Professional construction cost estimation services providing accurate project budgeting and comprehensive takeoff solutions for all building trades."
  },
  {
    name: "Contractor List",
    url: "https://staging.contractorslist.com/",
    logo: "/footerlogos/contractorL.png",
    description: "Comprehensive contractor directory platform connecting property owners with verified, licensed contractors across various construction specialties."
  },
  {
    name: "Bitwords",
    url: "https://www.bitwords.com/",
    logo: "/footerlogos/bitwords.png",
    description: "Digital marketing and content creation agency providing comprehensive online presence solutions for businesses across multiple industries."
  },
  {
    name: "Fusion Cortex",
    url: "https://fusioncortex.com/",
    logo: "/footerlogos/Fusion-Cortex.jpg",
    description: "Leading technology solutions provider specializing in AI-driven software development and digital transformation services."
  },
  {
    name: "Grobots",
    url: "https://grobots.ai/",
    logo: "/footerlogos/grobot.png",
    description: "Advanced robotics and automation company delivering intelligent solutions for industrial and commercial applications."
  },
  {
    name: "Rush Corporation",
    url: "https://rushcorporation.com/",
    logo: "/footerlogos/rush.png",
    description: "Multi-industry corporation offering diverse business solutions and strategic consulting services across various sectors."
  },
  {
    name: "Construction Estimating Texas",
    url: "https://constructionestimatingtexas.com",
    logo: "/footerlogos/Taxes.png",
    description: "Professional construction cost estimation services for residential and commercial projects throughout Texas."
  },
  {
    name: "Construction Estimating New York",
    url: "https://constructionestimatingnewyork.com",
    logo: "/footerlogos/newyork.png",
    description: "Accurate construction estimating and project planning services for New York's building and development industry."
  },
  {
    name: "Construction Estimating California",
    url: "https://constructionestimatingcalifornia.com",
    logo: "/footerlogos/california.png",
    description: "Comprehensive construction cost analysis and estimation services for California's diverse construction market."
  },
  {
    name: "Estimating Florida",
    url: "https://estimatingflorida.com",
    logo: "/footerlogos/florida.png",
    description: "Specialized construction estimating services tailored for Florida's unique building requirements and regulations."
  },
  {
    name: "Lumber Takeoff",
    url: "https://lumberstakeoff.us",
    logo: "/footerlogos/lumber.png",
    description: "Precise lumber quantity calculations and material takeoff services for construction and woodworking projects."
  },
  {
    name: "Drywall Estimating",
    url: "https://drywallestimating.us",
    logo: "/footerlogos/drywall.png",
    description: "Expert drywall material estimation and cost analysis services for interior construction projects."
  },
  {
    name: "Plumbing Takeoff",
    url: "https://www.plumbingtakeoff.com",
    logo: "/footerlogos/plumbing.png",
    description: "Professional plumbing system design and material takeoff services for residential and commercial buildings."
  },
  {
    name: "Electrical Estimates",
    url: "https://electricalestimates.us",
    logo: "/footerlogos/electrical.png",
    description: "Comprehensive electrical system estimation and cost analysis for construction and renovation projects."
  },
  {
    name: "MEP Estimate",
    url: "https://mepestimate.us",
    logo: "/footerlogos/mep.png",
    description: "Mechanical, Electrical, and Plumbing estimation services providing integrated building systems cost analysis."
  },
  {
    name: "USA Construction Takeoff",
    url: "https://usaconstructiontakeoff.com",
    logo: "/footerlogos/usa.png",
    description: "Nationwide construction takeoff and estimation services covering all major building trades and specialties."
  },
  {
    name: "Phoenix Estimating",
    url: "https://phoenixestimating.com/",
    logo: "/footerlogos/pheonix.png",
    description: "Professional construction estimating services specializing in Arizona's commercial and residential markets."
  },
  {
    name: "Roofing Estimators",
    url: "https://roofingestimators.us/",
    logo: "/footerlogos/roofing.png",
    description: "Specialized roofing cost estimation and material takeoff services for all types of roofing systems and repairs."
  }
];

export default function PartnerCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            <p className="text-sm font-semibold uppercase tracking-wider">Our Trusted Partners</p>
            <div className="h-[2px] w-12 bg-primary" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Industry Leading Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with top-tier companies across various industries to deliver exceptional services and innovative solutions to our clients.
          </p>
        </div>

        {/* Partner Logos Bar */}
        <LogoBar />

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center h-24 mb-4 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-20 max-h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Company Name */}
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                {partner.description}
              </p>

              {/* Visit Link */}
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Visit Website</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
