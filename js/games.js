function loadGames() {
    document.querySelector("#content").innerHTML = `
        <div>
            <h1>My Games</h1>
                <p> 
                    I had always been interested in game devlopment and one random day when I was bored I decided to try and make one. 
                    Pico-8 is a fantasy console where people make bytesised retro style gammes and I was always interested in it and it seemed
                    fairly easy to get into so I decided to give it a try, and so far I have made and released two games on the official
                    <a href="https://www.lexaloffle.com/bbs/?uid=99833">pico-8 website</a> and 
                    my own <a href="https://lethaldawg.itch.io">itch.io page</a>.
                </p>
                <p> You can try both these games out right here on my portfolio:</p>
                <p> To play them click the play icon on the game you want to try then to see the controls press Enter, use the arrow keys to navigate to options (press
                    Enter to select) and then press enter on controls and you can see how to play.
                    For mouse and keyboard controls it should just be the arrow keys for movement and then Z and X or C and V to navigate the menu's
                </p>
        </div>

        <div>
            <h2> Temple Score</h2>
            <h3> Released in May 21st 2025</h3>
            <p> Dodge chasing and random moving enemies, use powerups, collect coins to increase your score </p>
            <p> This was the first game I created, which I was proud of at the start but looking back now there are many things that could be improved </p>
            <iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=templescore" allowfullscreen width="621" height="513" style="border:none; overflow:hidden"></iframe>
        </div>  

        <div> 
            <h2> Penguin Dodger</h2>
            <h3> Released in October 21st 2025</h3>
            <p> Dodge orbs shot by evil seals to survive and beat your highscore </p>
            <p> 
                This was my second game I created, much more polished than my first one, better feeling to the gameplay
                with more tight colissions, improved visuals and music and a more simple but tighter gameplay loop
            </p>
            <iframe src="https://www.lexaloffle.com/bbs/widget.php?pid=penguin_dodger" allowfullscreen width="621" height="513" style="border:none; overflow:hidden"></iframe>
        </div>
    `;
}
            
            