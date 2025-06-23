
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const About = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      correspondence: ""
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject || "Contact from Anno Datorum");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\n${data.correspondence ? `Correspondence: ${data.correspondence}` : ''}`
    );
    
    window.location.href = `mailto:dobrytara@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">About</h1>
          
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-6">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-gray-700 text-white">TD</AvatarFallback>
            </Avatar>
            
            <div className="text-center mb-6">
              <p className="text-gray-300 text-lg mb-4">
                Welcome to Anno Datorum - modeling the collective experience in the era of information with AI.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                I'm passionate about exploring how artificial intelligence shapes our understanding of data and human experience.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/twinzies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/girlenginerd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <Mail className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <h2 className="text-2xl font-bold text-white mb-2">Contact Me</h2>
            <p className="text-gray-400">Send me a message and I'll get back to you.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="bg-gray-800 border-gray-600 text-white" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-gray-800 border-gray-600 text-white" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Message subject" 
                        className="bg-gray-800 border-gray-600 text-white" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message..." 
                        className="bg-gray-800 border-gray-600 text-white min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="correspondence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Correspondence (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="How would you like me to respond?" 
                        className="bg-gray-800 border-gray-600 text-white" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default About;
