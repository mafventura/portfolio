export default function Contacts() {
    return (
        <div class="container bg-white ml-5 my-12 mr-0 p-12 rounded-l-3xl shadow-lg">
            <div class="flex mb-5">
                <h3 class="text-orange">.</h3>
                <h3>contacts</h3>
            </div>
            <div class="flex-column items-center">
                <button>mafalda.ventura@live.com.pt</button>
                <div class="flex ">
                {/* eslint-disable-next-line */}
                    <a href="https://github.com/mafventura" target="_blank"><img class="h-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"/></a>
                {/* eslint-disable-next-line */}
                    <a href="https://www.linkedin.com/in/mafaldacventura/" target="_blank"><img class="h-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="linkedin"/></a>
                </div>
            </div>
        </div>
    );
}
