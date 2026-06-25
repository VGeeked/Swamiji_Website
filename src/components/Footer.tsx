import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-accent/10 bg-secondary">
      <div className="container mx-auto px-6 py-4 max-w-3xl text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Yog Tantra Agama. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;