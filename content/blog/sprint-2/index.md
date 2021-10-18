---
title: Sprint 2
date: "2021-10-17T22:12:03.284Z"
description: "Simulation of DFAs, proof of concept for machine builder ui"
---

## Summary

Sprint 2 was the first full-length sprint for project Machinist, and we did not
take that opportunity lightly!

Major progress has been made on 2 of the most important design problems for the
project: how the machine builder UI will work, and how to simulate a DFA.

Along these lines, 7 user stories and tasks were completed in Sprint 2. Some of
which required major R&D and experimentation.

### Jira Summary - Stories Completed

<div
  style="
    width: calc(100% + 28rem);
    height: 33.5rem;
    transform: translate(-23%);
  "
>
  <iframe
    src="/sprint-2-jira/index.html"
    frameborder="0"
    style="width: 100%; height: 100%"
  ></iframe>

  <div style="transform: translate(25%, -2.5rem)">
    <a
      href="https://flapflap.atlassian.net/jira/software/projects/FLAP/boards/1"
    >
      https://flapflap.atlassian.net/jira/software/projects/FLAP/boards/1
    </a>
  </div>
</div>

<!--
TODO: remove below

Sprint 2 was focused on implementing a base for DFA creation to the simulator
and ui as well as setting up system ui elements. the machine UI portion involved
being able to Render small circles on a canvas and drag them around, as well as
drag from the edges of a circle to another circle in order to make a transition.

These implementations required research to be done that involved examining sites that provided similar services to see how their sites handled their ui. The examined uis were Draw.io, Miro, as well as the visual representation of the pipeline in github actions. Experimentation was also done comparing canvas and SVG elements. This ultimately ended with the descision to make DFA nodes with REACT elements while having the lines connecting said nodes as SVG elements. -->

<!-- ## Downloads

Below are some direct download links, but you can also view the documents on
Google Drive (link below).

- [machinist-project-proposal-v1.pdf](https://drive.google.com/uc?export=download&id=1csMWjpshNVUCfydvZpLcVHtQKyEwdx6N)
- [documentation.pdf](https://drive.google.com/uc?export=download&id=1sNd4GDJ2Z0OsL04CVWS3yk1JT22XLjKV)
- [user-story-backlog.pdf](https://drive.google.com/uc?export=download&id=1rP0Gu2FtxZOi4-AYYn04Cghkui0jc6cO) -->

<!-- ## Changelog

### Code, DevOps, and Administration Changes

- work in progress to simulate DFAs with no GUI
- work in progress to create JSON format for describing a DFA
- work in progress to create a JSON schema for validating a JSON document
- work in progress to make a go serializer and deserializer that converts between JSON format and Go structs
- work in progress to make a go serializer and deserializer that converts between YAML format and Go structs
- work in progress for the creation of a toolbar for the machinist web app that allows for the managment of common options and settings
- work in progress for implementing query to REST API for simulating DFAs

### Docs Changes

- replacement of the Gatsby template README for the site repo and replacing it with one that properly describes the site repo -->

## Links

### Project Management Tools

- GOOGLE DRIVE: <https://drive.google.com/drive/folders/18dWUMTXYIPUQAYMiFWmqotKA-cOekT3Q?usp=sharing>
- GITHUB: <https://github.com/flapflapio>
- JIRA: <https://flapflap.atlassian.net/jira/software/projects/FLAP/boards/1>

### App Stuff

- WEBSITE: <https://www.flapflap.io/>
- WEB-APP: <https://machinist.flapflap.io/>

## GitHub Repos

- `site`: <https://github.com/flapflapio/site>
  - Documentation website for Machinist capstone project
  - The website you are currently on
- `simulator`: <https://github.com/flapflapio/simulator>
  - State machine simulator microservice for Machinist, written in golang
- `devops`: <https://github.com/flapflapio/devops>
  - DevOps scripts: Terraform, Ansible, Bash, Kubernetes manifests, etc.
- `machinist-ui`: <https://github.com/flapflapio/machinist-ui>
  - Machinist web app
