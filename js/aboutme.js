function loadAboutMe() {
    document.querySelector("#content").innerHTML = `
        <div class="text-center">
            <h1 class="text-2xl font-bold">About Me</h1>
             <p class="max-w-prose mx-auto"> 
                I'm Lucas, a Software Engineering student currently on my 2nd year of University.
                I like to build anything that I randomly think of. Ranging from simple tools to use or small games.
            </p>

            <h1 class="text-xl font-semibold mt-4"> Tech Stack </h1>
            <p class="max-w-prose mx-auto">
               I have experience with a variety of programming languages and technologies, including Java, Lua, and more. I enjoy learning new technologies and applying them to my projects. 
            </p>    
        
            <h1 class="text-xl font-semibold mt-4"> Game Development </h1>
            <p class="max-w-prose mx-auto">
                I create arcade retro-style games using Pico-8.
            </p>   
            <div class="flex items-center justify-center mt-4 space-x-4">
                <img src="images/games/penguindodger/gif/penguindodger.gif" alt="Penguin Dodger Gameplay Gif">
                <img src="images/games/templescore/gif/templescore.gif" alt="Temple Score Gameplay Gif">
            </div>
        </div>
    `;
}    