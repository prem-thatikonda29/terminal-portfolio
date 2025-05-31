import React, { useState } from "react";
import { FileText, Headset } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon.",
      });
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-green flex gap-2">
        <Headset />
        Contact Me
      </h2>

      <div className="glass-panel p-4">
        <div className="flex items-start">
          <FileText
            className="text-terminal-amber mr-2 mt-1 flex-shrink-0"
            size={20}
          />
          <div className="w-full">
            <p className="text-terminal-text mb-4">
              Let's connect! Fill out the form below or reach out to me
              directly:
            </p>

            <div className="space-y-2 mb-4">
              <p>
                <span className="text-terminal-comment">$</span>{" "}
                <span className="text-terminal-green">email</span>:
                <a
                  href="mailto:premthatikonda.work@gmail.com"
                  className="ml-2 text-terminal-blue"
                >
                  premthatikonda.work@gmail.com
                </a>
              </p>
              <p>
                <span className="text-terminal-comment">$</span>{" "}
                <span className="text-terminal-green">github</span>:
                <a
                  href="https://github.com/prem-thatikonda29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-terminal-blue"
                >
                  github/prem-thatikonda29
                </a>
              </p>
              <p>
                <span className="text-terminal-comment">$</span>{" "}
                <span className="text-terminal-green">linkedin</span>:
                <a
                  href="https://www.linkedin.com/in/premthatikonda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-terminal-blue"
                >
                  linkedin/premthatikonda
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="terminal-prompt flex items-center mb-1">
                <span className="prompt-symbol text-terminal-green">$</span>
                <span className="text-terminal-command ml-2">input --name</span>
              </div>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-terminal-bg border border-terminal-green/30 rounded p-2 text-terminal-text focus:border-terminal-green focus:outline-none transition-colors"
              />

              <div className="terminal-prompt flex items-center mb-1">
                <span className="prompt-symbol text-terminal-green">$</span>
                <span className="text-terminal-command ml-2">
                  input --email
                </span>
              </div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full bg-terminal-bg border border-terminal-green/30 rounded p-2 text-terminal-text focus:border-terminal-green focus:outline-none transition-colors"
              />

              <div className="terminal-prompt flex items-center mb-1">
                <span className="prompt-symbol text-terminal-green">$</span>
                <span className="text-terminal-command ml-2">
                  input --message
                </span>
              </div>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={4}
                className="w-full bg-terminal-bg border border-terminal-green/30 rounded p-2 text-terminal-text focus:border-terminal-green focus:outline-none transition-colors"
              />

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-terminal-green/20 hover:bg-terminal-green/30 text-terminal-green border border-terminal-green/30 rounded p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting"
                  ? "$ sending message..."
                  : "$ send message"}
              </button>

              {formStatus === "success" && (
                <p className="text-terminal-success mt-2">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {formStatus === "error" && (
                <p className="text-terminal-error mt-2">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <p className="text-terminal-comment italic">
        Type 'help' to see all available commands.
      </p>
    </div>
  );
};
