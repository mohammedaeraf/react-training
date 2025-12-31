function Navbar() {
    return (
        <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Future Leaders Academy</h1>
            <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Courses</li>
                <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar;