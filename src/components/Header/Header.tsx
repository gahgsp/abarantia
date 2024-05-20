const Header = () => {
  return (
    <header className="flex items-center justify-between sticky max-w-full h-20 rounded-t-none rounded-b-lg bg-white text-slate-800 py-4 px-4 mx-auto">
      <button className="ml-2">Refresh</button>
      <div className="flex justify-center flex-1 space-x-4">
        <button>Home</button>
        <button>GitHub</button>
      </div>
      <button className="mr-2">Dark / Light</button>
    </header>
  );
};

export default Header;
