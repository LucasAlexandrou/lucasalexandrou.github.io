function loadProjects() {
    document.querySelector("#content").innerHTML = `
        <div>
            <h1 class="text-2xl font-bold text-center">My Projects</h1>

            <h1 class="text-center text-xl font-bold mt-4"> This Portfolio Website </h1>
            <p class="max-w-prose mx-auto mt-4">
                This is a Github Page website that I built using HTML, CSS and JavaScript. I wanted to create a portfolio website to showcase my projects and skills, and I thought it would be a great opportunity to learn more about web development.
                I used Tailwind CSS for styling and to make the website responsive, and I used JavaScript to dynamically load the content for each section of the website. As the website is hosted on Github Pages, I am able to easily update and maintain it.
                I believe I was able to create a clean and simple design that does it's job of showcasing some of my projects. I plan to continue improving and updating the website as I create more projects and gain more experience in web development.
            </p>

            <h1 class="text-center text-xl font-bold mt-4"> LethalTheme-ES </h1>
            <p class="max-w-prose mx-auto mt-4">
                LethalTheme-ES is a theme built for EmulationStation, a popular front-end used in Batocera based Linux devices and Retrobat on Widonws.
                The theme uses system icons from iiSU. It supports multiple game views including grid, carousel, basic and detailed and has multiple colour schemes.
                It uses relative positioning giving it a responsive design for multiple aspect ratios such as 4:3, 16:10 and 3:2.
            </p>
            <a href="https://github.com/LucasAlexandrou/LethalTheme-ES" target="_blank" class="underline block text-center mt-4">View LethalTheme-ES on Github</a>
            <div class="flex flex-col items-center mt-4 gap-4">
                <img src="images/lethaltheme-es/light-pink-system.PNG" alt="LethalTheme-ES Screenshot" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
                <img src="images/lethaltheme-es/dark-system-gba.PNG" alt="LethalTheme-ES Screenshot 2" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
            </div>
           
            <h1 class="text-center text-xl font-bold mt-4"> ROM Sorter </h1>
            <p class="max-w-prose mx-auto mt-4">
                This project similarly to my Tier List Maker is a console application that I built using Java. I have many devices that I use to emulate and so the idea came when I needed to organize my ROMs across multiple devices. 
                The application allows you to point to a folder containing ROMs and it will sort them into subfolders based on the console they belong to. It does this by looking at the extension name of the file
                and matching it to predefined lists of extensions for each console. It is a project that I plan to continue improving by adding more consoles either that I feel like are needed or that anyone else who uses the application feels like are needed. 
                With simply provind a directory for your ROM folder it can be organised as seen below.
            </p>
            <a href="https://github.com/LucasAlexandrou/RomSorter" target="_blank" class="underline block text-center mt-4">View ROM Sorter on Github</a>
            <div class="flex flex-col items-center mt-4 gap-4">
                <img src="images/romsorter/beforesort.PNG" alt="ROM Sorter Screenshot" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
                <img src="images/romsorter/aftersort.PNG" alt="ROM Sorter Screenshot 2" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
            </div>

            <h1 class="text-center text-xl font-bold mt-4"> Tier List Maker </h1>
            <p class="max-w-prose mx-auto mt-4">
                This is a simple console application that I built using Java. The idea for this project came from my love for making lists of things like my favourite games, games I want to play, etc. 
                I wanted to create a simple application that would allow me to easily create and manage these lists, and it was right before I started my 2nd year of university so I wanted a bit of a refresh in my Java skills.
                The application allows you to create a list and edit it by adding new items at any position in the list, remove items, save the list to a file and load it back up later and creating lists of custom sizes.
            </p>
            <a href="https://github.com/LucasAlexandrou/TierListMaker" target="_blank" class="underline block text-center mt-4">View Tier List Maker on Github</a>
            <div class="flex flex-col md:flex-row items-center justify-center mt-4  gap-4">
                <img src="images/tierlistmaker/creatingnewlist.png" alt="Tier List Maker Screenshot" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
                <img src="images/tierlistmaker/addingnewitem.png" alt="Tier List Maker Screenshot 2" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
            </div>
        </div>
    `; 
}
        