export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
