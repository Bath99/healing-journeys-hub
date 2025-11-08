import React, { useState } from "react";
import { Mail, Phone, MapPin, Heart, Brain, Users, Shield, Activity, Flame, Target, Cloud, HeartCrack, Wifi, LifeBuoy, Scale, TrendingUp, Bed, Zap, Wine, Drama, Clock, Video, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const specialties = [
    { title: "Anxiety", icon: Cloud },
    { title: "Depression", icon: HeartCrack },
    { title: "Behavioural Issues", icon: Activity },
    { title: "Coping Skills", icon: Target },
    { title: "Chronic Pain", icon: Flame },
    { title: "Addictions", icon: Wifi },
    { title: "Substance Use", icon: Wine },
    { title: "Trauma and PTSD", icon: Drama },
    { title: "Men's Issues", icon: Users },
    { title: "Life Transitions", icon: LifeBuoy },
    { title: "Relationship Issues", icon: Heart },
    { title: "Self Esteem", icon: TrendingUp },
    { title: "Sleep or Insomnia", icon: Bed },
    { title: "Stress", icon: Zap },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-background to-secondary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="We Care Mental Health Counselling Logo" 
              className="w-48 h-48 mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extralight text-foreground mb-6 tracking-tight">
            <span className="block text-care-blue-light font-medium">
              We Care
            </span>
            <span className="block mt-2 text-3xl md:text-5xl font-light text-foreground">
              Mental Health Counselling
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Compassionate, evidence-based psychotherapy to help you navigate life's challenges
            and discover your path to well-being
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-6 text-lg font-light rounded-full shadow-lg hover:shadow-xl"
            >
              Schedule a Free 15-Min Consultation
            </Button>
            <Button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="px-8 py-6 text-lg font-light rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Hello! I'm Angad, a Registered Psychotherapist (Qualifying). My passion for mental health grew from seeing limited resources in my community. I support people through emotional challenges, stress, and coping strategies, drawing from diverse cultures, identities, and life stories. My style is empathetic, collaborative, and respectful of individual experiences.
              </p>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                I use an integrative, client-centred approach, tailoring modalities like CBT, ACT, SFBT, Person-Centred Therapy, EFT, Narrative Therapy, MI, Humanistic Approaches, and Mindfulness-Based Approaches to your unique needs, learning style, and culture.
              </p>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Finding the right therapist can feel overwhelming—I offer free 15-minute consultations to see if we're a good fit. We'll create a safe, nonjudgmental space to explore barriers and build coping skills. Reach out to schedule your free consultation!
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Licensed & Certified</h3>
                    <p className="text-muted-foreground font-light text-sm">
                      Licensed by Province of Ontario / 17546
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Professional Memberships</h3>
                    <p className="text-muted-foreground font-light text-sm">
                      Canadian Counselling and Psychotherapy Association<br/>
                      College of Registered Psychotherapists of Ontario<br/>
                      Quebec Counselling Association - Professional Member
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Compassionate Care</h3>
                    <p className="text-muted-foreground font-light text-sm">
                      Your well-being is my priority
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6903b3b260f52893cba22fc9/fd7a681fd_AngadToor.jpg" 
                  alt="Angad Toor - Registered Psychotherapist" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="services" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Specialties & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Tailored therapeutic support for your unique needs and goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300 mx-auto">
                    <specialty.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground text-center leading-tight">
                    {specialty.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            My Approach
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
            I believe that therapy is a collaborative journey. My role is to provide a safe,
            supportive environment where you feel heard, understood, and empowered to make
            positive changes in your life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-lg font-medium text-foreground mb-2">Collaborative</h3>
              <p className="text-muted-foreground font-light text-sm">
                We work together to identify goals and create a path forward
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-medium text-foreground mb-2">Growth-Focused</h3>
              <p className="text-muted-foreground font-light text-sm">
                Building on your strengths while addressing challenges
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💙</div>
              <h3 className="text-lg font-medium text-foreground mb-2">Compassionate</h3>
              <p className="text-muted-foreground font-light text-sm">
                A non-judgmental space where you can be yourself
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Flexible Care When You Need It
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Therapy that fits your schedule and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  No Waitlist
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Begin your healing journey right away. Support is available when you're ready, without unnecessary delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  Daytime, Evening & Weekend
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Convenient scheduling throughout the week including evenings and weekends to accommodate your busy life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  In-Person & Virtual
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Choose between face-to-face sessions in Brampton or secure online therapy from anywhere in Ontario.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4">
              Wherever you are in your healing journey, we're here to meet you with care, flexibility, and compassion.
            </p>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We also provide therapy to clients living in Canadian provinces and territories where the practice of psychotherapy is not currently regulated.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-light">
              Ready to take the first step? I'd love to hear from you.
            </p>
          </div>

          <Card className="border-none shadow-xl bg-card">
            <CardContent className="p-8 md:p-12">
              <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Full Name *
                  </label>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-light"
                      placeholder="Your name"
                    />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2">
                      Phone (optional)
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-light"
                      placeholder="(289) 769-1989"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-light min-h-[150px]"
                    placeholder="Tell me a bit about what brings you here and how I can help..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-light rounded-full shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center font-light">
                  All inquiries are confidential. I typically respond within 24-48 hours.
                </p>
              </form>
              
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground font-light">
                    <Mail className="w-4 h-4 inline mr-2 text-primary" />
                    angadtoor25@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    <Phone className="w-4 h-4 inline mr-2 text-primary" />
                    (289) 769-1989
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                    Brampton, ON
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
