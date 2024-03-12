export default function NavBar() {
    return (
        <nav class="flex justify-center items-center space-x-8 shadow-lg p-3 bg-white sticky top-0 z-50">
            <a href="#a"> </a>
            <div class="flex">
                <p class="text-orange">.</p>
                <a href="#about" class="text-black hover:text-blue">
                    about
                </a>
            </div>
            <div class="flex">
                <p class="text-orange">.</p>
                <a href="#experience" class="text-black hover:text-blue">
                    experience
                </a>
            </div>
            <a href="#top" class="font-bold">
                <img src="https://i.imgur.com/uLIzXp2.png" alt="M logo" class="h-10" />
            </a>
            <div class="flex">
                <p class="text-orange">.</p>
                <a href="#projects" class="text-black hover:text-blue">
                    projects
                </a>
            </div>
            <div class="flex">
                <p class="text-orange">.</p>
                <a href="#contacts" class="text-black hover:text-blue">
                    contacts
                </a>
            </div>
        </nav>
    );
}
