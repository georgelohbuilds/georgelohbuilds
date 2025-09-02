export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} George Loh. Built with ❤️ by George Loh.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Ready for GitHub Pages deployment
          </p>
        </div>
      </div>
    </footer>
  );
};