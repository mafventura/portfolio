import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Carousel,
    IconButton,
} from "@material-tailwind/react";

export default function Projects() {
    return (
        <div class="container bg-white my-12 mr-5 p-12 rounded-r-3xl shadow-lg">
            <div class="flex mb-5">
                <h3 class="text-orange">.</h3>
                <h3>projects</h3>
            </div>

            <div>
                <Carousel
                    className="rounded-xl w-full"
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <Card className="w-full flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src="https://i.imgur.com/sL2OuFB.png"
                                alt="Project 1 - Space Invaders"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Space Invaders (Project 1, GA)
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal">
                                This was my first ever big project, I chose to make Space Invaders.
                                It was made with HTML, CSS and JavaScript. There was no theme in
                                mind, other than aliens and spaceships, but I gave a big importance
                                to styling since I think it could make or break a project.
                            </Typography>
                            <div class="flex">
                                <a
                                    href="https://mafventura.github.io/Unit1_Project_Space_Invaders/"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        Deployment
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                                <a
                                    href="https://github.com/mafventura/Unit1_Project_Space_Invaders?tab=readme-ov-file"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-full flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src="https://i.imgur.com/MxiTKm7.png"
                                alt="Project 2 - PlayPal"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                PlayPal (Project 2, GA)
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal">
                                Project 2 follows a MEVN structure with MongoDB, Express, Vue and
                                Node. It's a web application where you can add your board games to
                                your library, add your friends and family as players, and log and
                                keep track of scoring through out your various plays!
                            </Typography>
                            <div class="flex">
                                <a
                                    href="https://playpal-mevn-frontend.netlify.app/"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        Deployment
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                                <a
                                    href="https://github.com/mafventura/PlayPal_frontend_Unit2_Project"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-full flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src="https://i.imgur.com/HJvMGr4.png"
                                alt="Project 3 - Journée"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Journée (Project 3, GA)
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal">
                                This was a MERN group project (collaboration with Evylina Antao and
                                Patrick Quayle). For this project, we decided to build a web
                                application of a Daily Planner, where you can log a Daily Check-in,
                                To-do’s List and Schedule events.
                            </Typography>
                            <div class="flex">
                                <a href="https://journee.site/" className="inline-block">
                                    <Button variant="text" className="flex items-center gap-2">
                                        Deployment
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                                <a
                                    href="https://github.com/mafventura/unit3project-frontend?tab=readme-ov-file"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-full flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src="https://i.imgur.com/tgJwrTC.png"
                                alt="Project 4 - Happy Campers"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Happy Campers (Project 4, GA)
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal">
                                This was a project with a Django/Pyhton backend, SQL database and
                                REACT frontend. For this project, I decided to create a tool that
                                was based on something that would’ve been useful as a tool for my
                                previous job. It is a web application where parents can register
                                their kids for the available Holiday Camps, and Staff members can
                                see these registrations and information about the kids.
                            </Typography>
                            <div class="flex">
                                <a
                                    href="https://happy-campers.netlify.app/"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        Deployment
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                                <a
                                    href="https://github.com/mafventura/happycampers-frontend?tab=readme-ov-file"
                                    className="inline-block"
                                >
                                    <Button variant="text" className="flex items-center gap-2">
                                        GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                </Carousel>
            </div>
        </div>
    );
}
