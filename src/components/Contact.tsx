import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "lahorivenkatesh709@gmail.com",
    href: "mailto:lahorivenkatesh709@gmail.com",
    color: "text-blue-500"
  },

  {
    icon: MapPin,
    title: "Location",
    value: "NIT Jaipur Rajasthan, India",
    href: "#",
    color: "text-red-500"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lahori-venkatesh",
    icon: "github",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/venkatesh-lahori/",
    icon: "linkedin",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    href: "https://x.com/NIT_Venkatesh",
    icon: "twitter",
    color: "hover:text-blue-400"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // Send the form data using EmailJS
    emailjs
      .send(
        'service_9zk5y8k',
        'template_o0q7gpv',
        data,
        'gcULbDlD5aK8ODPg3'
      )
      .then(
        (response) => {
          console.log('Success:', response);
          toast({
            title: "Message Sent Successfully! 🎉",
            description: "Thank you for your message. I'll get back to you within 24 hours.",
          });
          form.reset();
        },
        (error) => {
          console.error('Error:', error);
          toast({
            title: "Message Failed to Send",
            description: "There was an issue sending your message. Please try again or contact me directly.",
            variant: 'destructive',
          });
        }
      );
  }

  return (
    <section id="contact" className="py-16 bg-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about design and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-md group"
                >
                  <div className={`p-3 rounded-full bg-primary/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">{info.title}</h4>
                    <p className="text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>



            {/* Response Time */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Response Time</p>
                <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border/50"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Send Message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or just say hello!"
                          className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full group"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
