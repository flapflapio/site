---
title: Sprint 3
date: "2021-11-07T22:12:03.284Z"
description: "Big changes made in sprint 3..."
---

## Summary

Sprint 3 completes our first sprint release! 

A lot of changes were made in our Machinist project. The Machinist UI had major tweaks. As for the simulator, lots of APIs and http requests were handled. 

19 Jira issues were completed. 

## Downloads

Below are some direct download links, but you can also view the documents on
Google Drive (link below).

- [documentation.pdf](https://drive.google.com/uc?export=download&id=1sNd4GDJ2Z0OsL04CVWS3yk1JT22XLjKV)
- [user-story-backlog.pdf](https://drive.google.com/uc?export=download&id=1rP0Gu2FtxZOi4-AYYn04Cghkui0jc6cO)

## Changelog

### Project Management Tasks

- Setup weekly Golang tutorials for the whole team
- Tracked machinist issues/tasks through Jira
- Held  triweekly Scrum meetings

### Docs Changes

- Added and modified multiple sections in the project documentation document on Google Drive
- Wrote User Stories backlog document
- Created unit/system testing report 
- Modification on UI prototypes
- Creation of user personas


### Code, DevOps, and Administration Changes

- Implement unit testing for packages in the simulator
- Refactored the simulator core packages
- Refactored simulator to fix bugs througout the app
- Added a dynamically generated canvas background grid to the machinist UI
- Minimal sidebar and content to draw the graph was added to the machinist UI
- Added functionality that user can double-click on the canvas and 
- Added functionality that user can generate a new node on the graph underneath the mouse on the machinist UI
- Added transition arrows instead of plain lines in the machinist UI
- Added transition arc instead of straight line in machinist UI
- Added the ability to draw connections between nodes in machinist UI
- Added the text labels on transitions in the machinist UI
- Added styling for the transitions in the machinist UI
- Added the debug menu on the machinist UI
- Added the abilility to remove nodes for the user in the machinist UI
- Added toolbar menu items in the machinist ui
- Added a UI for denoting the end state
- Added the connection to the backend in the machinist ui
- Added a UI for denoting start state
- Added ability to run some inputs in the machinist ui
- Connected the simulator API to get request
- Connected the simulator API to end/delete request
- Connected the simulator API to start/post request
- Created CI/CD pipeline for machinist-ui project, runs unit tests. AWS Amplify
  handles the deployment pipeline.
