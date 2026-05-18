# Creative Coding Iterative Development Portfolio 
## Seth Brewer

Within this portfolio I will showcase my iterations for my p5.js experiments.

## Project 1

For this project I was heavily inspired by an album cover, as one of the options for this specific design was to recreate a poster or artwork.  
I immediatly thought of Dave's: We're All Alone In This Together. This cover has a deep artistic style- portraying a small boat infront of the sunset.   
He used striking pinks and purples to create an eyecatching peice- one that would be ahrd to replicate in p5. Before taking this project on I knew I would have to simplify  
the design slightly as it would be near impossible to recreate the paint strokes using this medium. 
The link to my first iteration is here- https://editor.p5js.org/sethebrewer/sketches/qycolK5qR  
This first design included creating thousands of lines with random lengths and tilts, that created the skyline. I was very happy with this concept after I had used multiple sources such as w3 schools and codecademy to grasp handling shapes in p5.   
The wave design was something that Dave(teacher not the artist) had gone through in class. I then compartmentalised it in 50pc by 50px squares- meaning I could adjust the colour with higher precision.  
The link to my second iteration is here-https://editor.p5js.org/sethebrewer/sketches/odOXNWRu9  
For this design I threw away the rugged look of the blocks of waves and created them to be the width of the canvas and increasing their density. I prefer this look as it looks more natural and teh colours fade nicely,  
however it doesnt stay as true to the original album.  
The link to my third iteration is here-https://editor.p5js.org/sethebrewer/sketches/0bOUxrr1a  
This design features a blue streak within the sky- as in teh orignal album cover, furthermore I fixed the waves and boat height so that the waves cant go over the boat.  
Overall, I am happy with how this project turned out, and I believe that I understand a lot more of the syntax used within javascript. However, I would say my weakness is the maths used in calculating the shapes and their movement, as I either have to look it up or use an AI model to calculate it.

## Project 2

For this project I chose the option where we could create a program that interacted with the users mouse. In addition, I chose an artist who I listen to frequently; Destroy Lonely. The album cover of his which I decided to redesign is from NO STYLIST deluxe.  
Here is the link for the first version: https://editor.p5js.org/sethebrewer/sketches/tLTtI4TDG  
For this iteration I decided to just do the sunset and background. Initially I couldnt get the sunset to move, but had the code framework to make it cycle through- this is fixed in the next iteration. To create the sunset I layered multiple rectangles on top of eachother- daing the colour from orange to blue as they went out.  
Here is the link for the second one: https://editor.p5js.org/sethebrewer/sketches/41W0OF2wk
For this iteration I made stars that, when the mouse is near, chnage from circles to star shapes. To do this I used the dist function to establish the mouse position and whenever the mouse was within 50px, the shape would change. I also inlcuded the slow moving susnet- which leaves the screen on the right side and joins on the left.  
I then used simple shapes to create the shadow of the person in the cover, who is predominantly visible when teh senset rotates behind him.  
Here is the link for the third version:https://editor.p5js.org/sethebrewer/sketches/bmFJWLoIP
In this version I changed the grass that I had incorporated in the previous version to where it would store each blade in an array- this meant that the grass didn't have a 'flicker' effect due to it not getting reset each frame.  
Overall, I am not as happy with this project as I had hoped. I believe the album cover that I chose appeared simple, but had many complex features that were hard to replicated using p5.  
If I were to take on this project again, I would choose an album cover that has more going on, but that has more simple artistic elements, rather than a photo. 

## Project 3

For this design we were given more creative freedom, and allowed to use generative AI and online sources for up to 70% for this work. I wanted to keep to the theme that I ahd with the previous two, but instead chose WRLD ON DRUGS by Future and Juice WRLD. I chose this cover because it has loads of elements, and I thought it could be improved with a moving design. The option that this falls under coul dbe debated, bu tI believe it to be a complex system and a particle generator.  
Dave had run through how to make a basic particle system within class, so I repurposed some of that work. This was to make the drink that is poured over the earth in the cover. Thankfully, it already had a partially collision systemm, which aided in my design. The next elemnt of my design was to make it 3d. We had also covered WEBGL, which helps you create a 3d environment within p5.  
My next task was to create the earth and have it revolve. I asked chatGPT to help me with this as I was unsure on the maths. It used noise, which is a random function that creates smoother relations between each number, weighting the randomness to the previous digit. This meant that the green elements would weight together to produce land and vice versa for the sea. It then told me how to make a sphere in p5- by creating a 'net' of rectangles.  
I then used the rotate function within draw, adding a value every frame to make the earth spin- I continued this with all elements. The cup was more of the same, but with even more complex maths. I tried to work it out myself, however the cylinder, along with teh rim of the cup was too much for my maths so I researched how to do it. It does this by creating a 'ring' meshing triangles together within a circle. I then repeated this but more compact for the rim, and then created a simple cirlce for the base. My next step was to lock the liquid within the edge of the cup to give the illsuion of liquid. I achieved this by randomising where the particles started and then rotating the whole thing together. My next step was the flowers.  
These were a lot more simple shapes, and I just created a centre circle with six smaller ones around it. I then applied a random orbit for these elements- smae as with the cup.  
The finishing touch was the title, which just consisted of downloading a google font and using the various text functions within p5. 
The difference between my first 2 iterations are the colours and the abundance of flowers. The first is less true to the original, and has less flowers. Here are the links: https://editor.p5js.org/sethebrewer/sketches/pi-ANMHK9    https://editor.p5js.org/sethebrewer/sketches/zHZsbIS3p
For the third iteration, I kept the black background from the first and the abundance of flowers from the second. I then wrapped the title around the earth. To achieve this I changed the angle each iteration, to align with the speed of the earth. While my maths skills were lacking, I just did alot of trial and error to achieve the result, as I had done a lot of research previously, along with AI help for the first couple of rotating elements. 
Here is the link: https://editor.p5js.org/sethebrewer/sketches/Z2S0MZWZn

Overall, I am very happy with this project. While it was very mathematically challenging, the use of W3 schools and generative AI meant that I could produce a program that I wouldn't have been able to otherwise, due to logic and mathmatical limitaions of using cos, and sin, along with PI- which I am not as familiar with. While I like the first to iterations, the final one is what I believe is the best- and while it is more realistic than the original, I believe it still resembles it. Furthermore, I believe that my confidence has grown as a result of thia final project, as I was forced to incorporate techniques and understand them through the application regarding my specific program.  



