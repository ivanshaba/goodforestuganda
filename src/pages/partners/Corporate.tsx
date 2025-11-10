import { useState, useRef } from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import partnersCorporateHeroBg from "@/assets/three.png";

const PartnersCorporate = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    organization: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace this with your actual email service or API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'partnerships@goodforestsuganda.org',
          subject: `New Partnership Inquiry from ${formData.firstName} ${formData.secondName}`,
          data: formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          secondName: '',
          organization: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${partnersCorporateHeroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-forest-dark/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div 
            ref={titleRef} 
            className={`transition-all duration-1000 ease-out ${
              titleVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Green <span className="text-accent">Partnerships</span>
            </h1>
            <p className="text-xl lg:text-2xl mt-4 font-light">
              Restoring Uganda's Forests Together
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Empowering Communities, Reviving Ecosystems, and Building a Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At the Good Forests Foundation Uganda, we believe that the path to environmental resilience lies in 
            collective action. Our Green Partnerships initiative brings together corporations, communities, NGOs, 
            and individuals to combat deforestation, restore degraded landscapes, and foster sustainable livelihoods. 
            By partnering with us, you're not just investing in trees, you're investing in people, biodiversity, and 
            a greener Uganda.
          </p>
        </div>
      </section>

      {/* Why Partnerships Matter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Why Green Partnerships Matter
          </h2>
          <p className="text-muted-foreground mb-6">
            Uganda's forests are under siege. Once covering vast expanses that supported agriculture, wildlife, 
            and tourism, our forest cover has dwindled dramatically over the past century due to deforestation 
            rates exceeding 500 km² annually. Today, forests account for just 24% of our land area, yet they remain 
            vital: providing over 90% of household energy, regulating water cycles, and harboring biodiversity hotspots.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3">
            <li><strong>Mobilizing Resources:</strong> Combining funding, expertise, and manpower for large-scale reforestation.</li>
            <li><strong>Empowering Locals:</strong> Training smallholder farmers in agroforestry to integrate trees with crops, boosting incomes while conserving soil and water.</li>
            <li><strong>Driving Impact:</strong> Through carbon credit programs and collaborative management, we restore reserves, capture CO₂, and create jobs.</li>
          </ul>
          <p className="text-muted-foreground mt-6">
            Our model draws from successful collaborations, such as those with the National Forestry Authority (NFA) 
            and Uganda Revenue Authority (URA), where corporate tree-planting has revitalized central forest reserves.
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Join Our Green Partnerships
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Businesses</h3>
              <p className="text-muted-foreground">
                Offset emissions, enhance your sustainability profile, and engage employees in on-ground activities. 
                Contact us for customized partnership packages.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Communities & NGOs</h3>
              <p className="text-muted-foreground">
                Access training, seedlings, and funding for joint projects to restore degraded lands and support livelihoods.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Individuals</h3>
              <p className="text-muted-foreground">
                Donate, volunteer, or purchase carbon credits to support our work and be part of Uganda's green future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Get Involved Today</h2>
            <p className="text-muted-foreground mb-4">
              Ready to take action and make a difference? Partner with us to restore forests, empower communities, and build resilience.
            </p>
            <p className="text-lg text-foreground font-semibold">
              Email: <a href="mailto:partnerships@goodforestsuganda.org" className="text-accent">partnerships@goodforestsuganda.org</a>
            </p>
            <p className="text-lg text-foreground font-semibold">
              Phone: +256 (0) 200 969 927
            </p>
          </div>

          {/* Partnership Form */}
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
              Start a Partnership
            </h3>
            <p className="text-muted-foreground mb-8 text-center">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Something went wrong!</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name Field */}
                <div className="relative">
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <div className={`relative transition-all duration-300 ${
                    focusedField === 'firstName' ? 'scale-105' : 'scale-100'
                  }`}>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('firstName')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-background border-2 border-muted-foreground/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      placeholder="Enter your first name"
                    />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'firstName' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>

                {/* Second Name Field */}
                <div className="relative">
                  <label htmlFor="secondName" className="block text-sm font-medium text-foreground mb-2">
                    Second Name *
                  </label>
                  <div className={`relative transition-all duration-300 ${
                    focusedField === 'secondName' ? 'scale-105' : 'scale-100'
                  }`}>
                    <input
                      type="text"
                      id="secondName"
                      name="secondName"
                      required
                      value={formData.secondName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('secondName')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-background border-2 border-muted-foreground/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      placeholder="Enter your second name"
                    />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'secondName' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              </div>

              {/* Organization Field */}
              <div className="relative">
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Name of Organization *
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'organization' ? 'scale-105' : 'scale-100'
                }`}>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('organization')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-background border-2 border-muted-foreground/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                    placeholder="Enter your organization name"
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'organization' ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'email' ? 'scale-105' : 'scale-100'
                }`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-background border-2 border-muted-foreground/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                    placeholder="Enter your email address"
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'email' ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How would you like to partner with us? *
                </label>
                <div className={`relative transition-all duration-300 ${
                  focusedField === 'message' ? 'scale-105' : 'scale-100'
                }`}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-background border-2 border-muted-foreground/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your partnership interests, projects, or how you'd like to collaborate..."
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 transition-opacity duration-300 pointer-events-none ${
                    focusedField === 'message' ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-accent/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Partnership Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersCorporate;