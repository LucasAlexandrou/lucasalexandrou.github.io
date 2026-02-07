function loadGames() {

    const isDesktop = window.innerWidth >= 768; 

    document.querySelector("#content").innerHTML = `
        <div class="text-center">
            <h1 class="text-2xl font-bold">My Games</h1>
            <section class="max-w-2xl mx-auto leading-relaxed space-y-4">
                <p class="max-w-2xl mx-auto">
                    I had always been interested in game devlopment and one random day when I was bored I decided to try and make one. 
                    Pico-8 is a fantasy console where people make bytesised retro style gammes and I was always interested in it and it seemed
                    fairly easy to get into so I decided to give it a try, and so far I have made and released two games on the official
                    <a href="https://www.lexaloffle.com/bbs/?uid=99833">pico-8 website</a> and 
                    my own <a href="https://lethaldawg.itch.io">itch.io page</a>.
                    You can try both these games out right here on my portfolio. To play them click the play icon on the game you want to try then to see the controls press Enter, use the arrow keys to navigate to options (press
                    Enter to select) and then press enter on controls and you can see how to play.
                    For mouse and keyboard controls it should just be the arrow keys for movement and then Z and X or C and V to navigate the menu's
                </p>
            </section>  
        </div>
        
        <section class="max-w-6xl mx-auto mt-16 space-y-16 px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div class="order-2 md:order-1"> 
                        <h1 class="text-xl font-bold"> Temple Score</h1>
                        <h1 class="text-lg"> Released in May 21st 2025</h1>
                        <p class="max-w-prose mx-auto"> Dodge chasing and random moving enemies, use powerups, collect coins to increase your score </p>
                        <p class="max-w-prose mx-auto"> This was the first game I created, which I was proud of at the start but looking back now there are many things that could be improved but it was a great learning experience. </p>
                        <a href="https://lethaldawg.itch.io/temple-score" target="_blank" class="underline">Play Temple Score on itch.io</a>
                    </div>

                    <!-- For desktop, show the iframe, for mobile show the gif, since the iframe is not really playable on mobile and the gif gives a better idea of how the game looks and plays than just a blank space where the iframe would be. -->
                    ${isDesktop ? `
                        <div class="order-1 md:order-2">
                            <div class="w-full overflow-hidden rounded-lg border-2 border-gray-800" style="height: 550px;">
                                <iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=templescore" allowfullscreen scrolling="no" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
                            </div>
                        </div>
                            ` : `
                        <div class="order-2 md:order-1">
                            <img src="images/games/templescore/gif/templescore.gif" alt="Temple Score Gameplay Gif" class="block md:hidden w-full rounded-lg border-2 border-gray-800">
                        </div>
                    `}
            </div>  

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> 
                <div class="order-2 md:order-1"> 
                    
                    ${isDesktop ? `
                    <div class="hidden md:block w-full overflow-hidden rounded-lg border-2 border-gray-800" style="height: 550px;">
                        <iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=penguin_dodger" allowfullscreen scrolling="no" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
                    </div>
                    ` : `
                    <img src="images/games/penguindodger/gif/penguindodger.gif" alt="Penguin Dodger Gameplay Gif" class="block md:hidden w-full rounded-lg border-2 border-gray-800">
                    `}
                </div>    

                <div class="order-1 md:order-2"> 
                    <h1 class="text-xl font-bold"> Penguin Dodger</h1>
                    <h1 class="text-lg"> Released in October 21st 2025</h1>
                    <p class="max-w-prose mx-auto"> 
                        Dodge orbs shot by evil seals to survive and beat your highscore.
                        This was my second game I created, much more polished than my first one, better feeling to the gameplay
                        with more tight colissions, improved visuals and music and a more simple but tighter gameplay loop.
                    </p>
                    <a href="https://lethaldawg.itch.io/penguin-dodger" target="_blank" class="underline">Play Penguin Dodger on itch.io</a>
                </div>
            </div>
        </section>
    `;
}
            
            