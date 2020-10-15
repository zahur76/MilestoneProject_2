# **STAR MATCH**

## TABLE OF CONTENT 
* [Introduction](#introduction)    
* [UX](#ux)
    * [UX design philosophy](#ux-design-philosophy)
* [Development cycle](#development-cycle)
* [Features](#features)
    * [Grid sytem](#grid-system)
    * [Control buttons](#control-buttons)
    * [Counter](#counter)
    * [Footer](#footer)
* [Technologies used](#technologies-used)
* [Javascript game logic](#javascript-game-logic)
* [Testing](#testing)
    * [UX testing](#ux-testing)
    * [validators](#validators)
    * [Chrome DevTools](#chrome-devtools)
    * [Jasmine unit testing](#jasmine-unit-testing)
    * [Game testing](#game-testing)
    * [Responsive design](#responsive-design)
    * [Manual tests performed](#manual-tests-performed)
    * [Summary of test results](#summary-of-test-results)
    * [Issues encountered during development testing](#issues-encountered-during-development)

* [Deployment](#deployment)
* [Future improvments](#future-improvements)
* [Credits](#credits)

## INTRODUCTION 

![Responsive image for game](assets/doc/responsive.png)

This project is a Star Wars themed memory match game. The game was constructed as a brain training tool 
to primarily strengthen memory whilst also being fun to play. It also incorporates the option to change the 
grid size depending on user preference which would add another level of complexity. 

The game is more geared towards Star Wars fans and incorportes Star Wars themed images, audio and
facts with the intention of improving the overall playing experience.

## UX 

By visiting this site as a user I want to:
* play a game to improve my congnitive function.  
* be able to navigate through the site with minimal difficulty to play the game with ease. 
* be able to select different difficulty levels so I can adapt to my personal goals. 
* have feedback on how well i am performing so as I can track any improvements in memory.
* play a brain traning game whilst having a fun experience.
* be exposed to general Star Wars character facts so I can further my Star wars knowledge.

A wireframe was constructed using balsamique wireframes. It can be found  [here](assets/doc/wireframe.pdf).

### UX design philosophy 

The site was designed to be minimalist by changing page configuration upon user input to allow the user to easily navigate 
through the initial game selection. This allowed the user to interact with information on a need to know basis.  
For example the grid system and control buttons would only appear once the "click to start' button had been clicked on. This was 
done with intention of improving UX. Modals were also used included as this was thought to be more intuitive for the user
and would prevent information overload. 

## FEATURES

The site consists of a two page design. The first page consists of the game which is made up of a logo, 
card grid system, control buttons, counter and footer. Two modals have also been included and described below.


The second page consists of card grid system which can be clicked to show character facts with a home button to return
back to game. The second page was not originally planned and was added as an afterthought to improve user experience.

![Image of cards](assets/doc/facts.png)

### Grid system

![Image of cards](assets/doc/main.png)

The card grid system forms the main part of the site whereby the user can select a pair of cards for comparison.
The design also includes a hover effect to assist the user is knowing which card will be selected.

### Control buttons

![Image of cards](assets/doc/main.png)

2 control buttons were included. The restart button permits the user to reset the game whilst the sound button
removes/adds sound effects.

### Counter

A counter was included to provide the user with a running count of every turn made.

### Modals

Two modals were included for the game. The first one permits the user to choose a difficulty level
which would change the size of card grid system. The second modal activated when the game was complete and contained:
* stats on the number of turns required to complete the game
* Star Wars character fact obtained from https://swapi.dev API 
* a button to play again.

![Image of cards](assets/doc/level.png)
