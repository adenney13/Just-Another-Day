# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | Complete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 17th| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 18th| Pseudocode / actual code | Incomplete
|Dec 18th| Initial Clickable Model  | Incomplete
|Dec 19th| MVP | Incomplete
|Dec 20th| Post MVP | Incomplete
|Dec 21st| Present | Incomplete


## Project Description

Don't let the haters get you down! Make your way home while avoiding the sad nay-sayers and bullies.
In this game, you're a happy faced, positive person who is trying to get across a field of sad faced, bullies who just want to bring you down with them. Get across the field and weave in and out of the crowd to get to the target at the end. Think of it as Frogger and Plants vs Zombies.

## Wireframes

https://cloudinary.com/console/media_library/asset/manage/summary/image/upload/Wireframes%2FWireframe%20Storyboard

## Priority Matrix

https://cloudinary.com/console/media_library/folders/all/Wireframes/Priority%20Matrix

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

--Create landing page

-Generate field

-Generate user and sad face characters

-Have sad face characters move across the plane right to left

-Have user move character across plane left to right

-User wins if they make their character across the field and touch the target

-User loses if a sad face touches them

-Alert for a win or a loss

-Reset





#### PostMVP 

-Add timer countdown

-Level 2 with more sad faces

-Have sad faces move at different speeds

-Have bad guys shoot?

-Have landing page as a modal

-More intricate/beautiful design for user/bad guys

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.


### Landing Page
When the user gets to the web page, there will be a home page with the title of the game, instructions, and a start button.

-Button to start game
	addEventListener to click to game page

### Game Initialization
The user will come to a field/grid. The user's happy face will be in the center of the far left side of the screen. There will be a wall of 4 sad faces on the right side of the screen and a target somewhere on the right edge of the screen as well.

-Generate field
	Div into createGameBoard function
	Just like blerf. Set coordinates.
	Rectangle. Maybe 4 x 10? 4x20?

-Generate user and bad guy characters
	Create character's in CSS and as div elements

### Playing The Game 
The sad faces will start moving across the screen towards the user's character at different intervals. The user will have to maneuver they're happy face character between the sad face stampede to reach the target at the right side of the screen.

-Have bad guy characters move across the plane right to left
	setInterval (different for each bad guy though) so they're staggered
	
-Have user move character across plane left to right
	addEventListener for keydown and keyCodes

### Winning The Game
If the user can get their happy face to the target without being overtaken by a sad face, they win! A pop-up alert with a congrats will appear, ending the game/level. However, if a sad face gets in their way, the game is over and the user becomes a sad face too. There will be a sad pop-up alert to end the game.

-Player wins if they make their character across the field and touch the target
	collision detection like in Blerf with target
-Player loses if a bad guy touches them
	collision detection like in Blerf with bad guys
	
### Resetting The Game
Both pop-up alerts will have a "try again" / reset button.
-Reset Button
	addEventListener button click to game page

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building characters/board game| H | 3hrs| 1.5hrs | 1.5hrs|
| Create User Movement Set Collision Detection with Sad Guys/Target| H | 3hrs| 4.75hrs | 3.25hrs |
| Automate Sad Guys| H | 2hrs| 11.75hrs | 7hrs |
| Win Logic| H | 3hrs| N/A | N/A |
| Build Alert Win/Lose Alert Pop-Ups| M | 3hrs| N/A | N/A|
| Total | H | 18hrs| N/A | N/A |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
