function loadAboutMe() {
    document.querySelector("#content").innerHTML = `
        <div class="text-center">
            <h1 class="text-2xl font-bold">About Me</h1>
            <div class="flex flex-col md:flex-row justify-center items-start text-left mt-4 gap-6">
                <img class="w-32 md:w-48 rounded-lg border-2 border-gray-800" src="images/me.jpg" alt="Picture of me">
                <p class="max-w-prose"> 
                    I'm Lucas, a Software Engineering student currently on my 2nd year of University.
                    I like to build anything that I randomly think of. Ranging from simple tools to use or small games.
                    I started my programming journey thanks to my enjoyment of indie games. I often watched solo devs make games on youtube and
                    I thought it was really cool that one person could make a whole game by themselves, so I wanted to try it out myself (which you can see I lived up to that).
                    Which gave me the idea of getting into the game development field, however to be a bit safer in my career choices I wanted to be a bit more general and so
                    I decided to go for software engineering as a degree, which I am really enjoying so far and I am excited to see where it takes me.
                </p>
            </div>

            <h1 class="text-xl font-semibold mt-4"> Tech Stack </h1>
            <p class="max-w-prose mx-auto">
               I have experience with a variety of programming languages and technologies, including Java, Lua, and more. I enjoy learning new technologies and applying them to my projects. 
            </p>    
        
            <h1 class="text-xl font-semibold mt-4"> Game Development </h1>
            <p class="max-w-prose mx-auto">
                I create arcade retro-style games using Pico-8.
            </p>   
            <!-- Stacking the images on top of each other for mobile -->
            <div class="flex flex-col md:flex-row items-center justify-center mt-4  gap-4">
                <img src="images/games/penguindodger/gif/penguindodger.gif" alt="Penguin Dodger Gameplay Gif">
                <img src="images/games/templescore/gif/templescore.gif" alt="Temple Score Gameplay Gif">
            </div>
        </div>
    `;
}    

