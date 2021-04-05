# Contributing
## Team Values and Norms
#### Values:
* We strongly value communication between members and transparency to better meet our goals
* Punctuality is very important so that we can maintain our schedule and make deadlines
* Asking for assistance when stuck is strongly encouraged, as a team we must help out a member whenever something comes up
#### Norms:
* Zoom/Standup meeting times:
  * Monday @ 4:45 pm
  * Wednesdays @ 3:15 pm
  * Sundays @ 7:00 pm
  
https://nyu.zoom.us/j/9669972254

## Git Workflow
* Pull from master branch to check for any recent changes made
* Branch before each task 
* Once task is complete, merge with master branch
* Pull from master once again
* Push all commits to original repo on Github

## Guidelines for Contributions
* Tasks and spikes are to be divided equally between team members
* Alert team members when work is pushed so the other members know to expect changes
* Have updates on progress ready prior to standups
* Ask for help on a task, if needed, early to avoid hangups in development

## Setting Up Local Environment
Clone repository through your command line using:<br>
`git clone https://github.com/agile-dev-assignments/project-setup-team-povedniki-attitude.git`<br>
Then open repository into your IDE of choice to begin contributions.

## Building and Testing
For set up, you must first write the following command in the command line:
```
git clone https://github.com/agile-dev-assignments/project-setup-team-povedniki-attitude.git
```

In order to install all the dependencies for the back end write:
```
cd back-end
npm install
npm start
```
Following this you must open up another command line window and perform:
```
cd front-end
npm install
npm start
```
The command will then prompt you to run the app on another port because the back end will be running on port 3000, you must respond yes to this. After this the front end will load in your local browser. 
