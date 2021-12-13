# Project Overview

## Project Name

Common Cast

## Project Description

This project will compare the casts of two movies submitted by the user, and return any cast members that appear in both movies.

## API and Data Sample
API: https://imdb-api.com
```JSON
{
    "imDbId": "tt0110413",
    "title": "Léon: The Professional",
    "fullTitle": "Léon: The Professional (1994)",
    "type": "Movie",
    "year": "1994",
    "directors": {
        "job": "Director",
        "items": [
            {
                "id": "nm0000108",
                "name": "Luc Besson",
                "description": ""
            }
        ]
    },
    "writers": {
        "job": "Writer",
        "items": [
            {
                "id": "nm0000108",
                "name": "Luc Besson",
                "description": "(written by)"
            }
        ]
    },
    "actors": [
        {
            "id": "nm0000606",
            "image": "https://imdb-api.com/images/original/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_Ratio0.7273_AL_.jpg",
            "name": "Jean Reno",
            "asCharacter": "Leon"
        },
        {
            "id": "nm0000198",
            "image": "https://imdb-api.com/images/original/MV5BMTc3NTM4MzQ5MV5BMl5BanBnXkFtZTcwOTE4MDczNw@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Gary Oldman",
            "asCharacter": "Stansfield"
        },
        {
            "id": "nm0000204",
            "image": "https://imdb-api.com/images/original/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7273_AL_.jpg",
            "name": "Natalie Portman",
            "asCharacter": "Mathilda"
        }
```


## Wireframes
https://whimsical.com/common-cast-wireframe-MGoBMaE8U3rSr5MwrFE8vE

There will be two search bars where movie titles should be entered. Beneath the search bars there will be designated areas to display images and titles of the selected movies, as well as any cast members that appear in both films.

### MVP/PostMVP


#### MVP 

- Find and use external api 
- Render data on page
- Fetch the ID# of slected queries 
- Find duplicates in the arrays of cast member names
- Display a list of names to the designated area

#### PostMVP  

- Add second API
- Add more information on displayed movies
- Add more features/information for displayed actors

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Dec 13| Project Approval | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Pseudocode / actual code | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix

https://whimsical.com/priority-matrix-PBjuRWvcdLxymL1dVmpwMu


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 2.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Adding page functionality in Javascript | H | 3hrs| 2.5hrs | 2.5hrs |
| Writing sorting algorithm | H | 3hrs| 2.5hrs | 2.5hrs |
| Linking images to display areas | H | 3hrs| 2.5hrs | 2.5hrs |
| Appending new elements to the DOM | H | 3hrs| 2.5hrs | 2.5hrs |
| Cleaning code | M | 3hrs| 2.5hrs | 2.5hrs |
| Testing | H | 3hrs| 2.5hrs | 2.5hrs |
| Debugging | H | 3hrs| 2.5hrs | 2.5hrs |
| Improve design functionality | M | 3hrs| 2.5hrs | 2.5hrs |
| Improve design aesthetics | L | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 33hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
