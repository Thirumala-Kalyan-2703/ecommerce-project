
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-4 text-center text-white">
      <p className="text-sm">
        Copyright &copy; {currentYear} MyShop
      </p>
    </footer>
  );
};

export default Footer;
