function loadProjects() {
    document.querySelector("#content").innerHTML = `
        <div>
            <h1 class="text-2xl font-bold text-center">My Projects</h1>

            <h1 class="text-xl font-semibold mt-4 text-center"> This Portfolio Website </h1>
            <p class="max-w-prose mx-auto mt-4">
                This is a Github Page website that I built using HTML, CSS and JavaScript. I wanted to create a portfolio website to showcase my projects and skills, and I thought it would be a great opportunity to learn more about web development.
                I used Tailwind CSS for styling and to make the website responsive, and I used JavaScript to dynamically load the content for each section of the website. As the website is hosted on Github Pages, I am able to easily update and maintain it.
                I believe I was able to create a clean and simple design that does it's job of showcasing some of my projects. I plan to continue improving and updating the website as I create more projects and gain more experience in web development.
            </p>
           
            <h1 class="text-xl font-semibold mt-4 text-center"> Tier List Maker </h1>
            <p class="max-w-prose mx-auto mt-4">
                This is a simple console application that I built using Java. The idea for this project came from my love for making lists of things like my favourite games, games I want to play, etc. 
                I wanted to create a simple application that would allow me to easily create and manage these lists, and it was right before I started my 2nd year of university so I wanted a bit of a refresh in my Java skills.
                The application allows you to create a list and edit it by adding new items at any position in the list, remove items, save the list to a file and load it back up later and creating lists of custom sizes
            </p>
            <div class="flex flex-col md:flex-row items-center justify-center mt-4  gap-4">
                <img src="images/tierlistmaker/creatingnewlist.png" alt="Tier List Maker Screenshot" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
                <img src="images/tierlistmaker/addingnewitem.png" alt="Tier List Maker Screenshot 2" class="block mx-auto mt-4 rounded-lg border-2 border-gray-800">
            </div>
        </div>
    `; 
}
        