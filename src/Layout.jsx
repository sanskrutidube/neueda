import Nav from './components/Nav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-serif">
      <header className="bg-blue-100 shadow-md rounded-b-lg">
        <Nav />
      </header>
      <main className="container mx-auto px-4 py-8 bg-green-100 rounded-lg shadow-lg my-6">
        {children}
      </main>
      <footer className="bg-blue-100 text-center py-4 mt-8 rounded-t-lg shadow-md">
        <p className="">&copy; 2024 Wizarding World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
