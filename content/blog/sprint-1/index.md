---
title: Sprint 1
date: "2021-09-26T22:12:03.284Z"
description: "Big changes made in sprint 1..."
---

## Summary

Project Machinist began from a split off from a previous capstone project. The
split occured Sept. 24th, so there were really only about 3 days for us to
create some deliverables for sprint 1 for this project.

Within this short time, we decided to set up the project management services
that we are using (Jira, Google Drive, etc. - see links below), provision our
resources on the cloud, start a few project repos and write some baseline code
(to be extended in Sprint 2).

So really, the tasks we completed were mostly setup tasks, but we wrote a decent
amount of code, in particular for the DevOps of the project (Terraform configs
for AWS, CI/CD pipelines, etc.). The infrastructure and deployment pipelines we
created during this sprint will be extremely useful in allowing us to move fast
in Sprint 2 and start coding the features of the app.

## Downloads

Below are some direct download links, but you can also view the documents on
Google Drive (link below).

- [machinist-project-proposal-v1.pdf](https://drive.google.com/uc?export=download&id=1csMWjpshNVUCfydvZpLcVHtQKyEwdx6N)
- [documentation.pdf](https://drive.google.com/uc?export=download&id=1sNd4GDJ2Z0OsL04CVWS3yk1JT22XLjKV)
- [user-story-backlog.pdf](https://drive.google.com/uc?export=download&id=1rP0Gu2FtxZOi4-AYYn04Cghkui0jc6cO)

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

## Changelog

### Project Management Tasks

- Created discord server, added members to it, created channels, roles, etc. to
  help keep us organized
- Created Jira org and flapflap project
- Created GitHub org ( github.com/flapflapio )
- Created Google Calendar and scheduled Scrum meetings
- Created Google Drive for the project

### Docs Changes

- Wrote project proposal, asked prof to split from our old capstone project team
  into this new project (Machinist)
- Wrote multiple sections in the project documentation document on Google Drive
- Wrote User Stories backlog document

### Code, DevOps, and Administration Changes

- Created site github repo
- Created simulator github repo
- Created devops github repo
- Created machinist-ui github repo
- Bought flapflap.io domain name on Google Domains
- Created baseline code for simulator project. For now the service doesn't
  actually simulate state machines, but we wrote a "framework" of code that will
  make it easy to start developing properly in sprint 2
- Created baseline code for machinist-ui. It is a Next.js app (React) in
  TypeScript. Uses AWS Amplify for deployment/hosting.
- Wrote CI/CD pipeline for site project, site is deployed to an S3 bucket on
  AWS. Served using the static website feature of Amazon S3, with a Cloud-Front
  Distribution in front of the website.
- Wrote CI pipeline for simulator service, runs unit tests.
- Created CI/CD pipeline for machinist-ui project, runs unit tests. AWS Amplify
  handles the deployment pipeline.
- Wrote Terraform config for provisioning the AWS Amplify app and associated
  resources on AWS.
- Wrote Terraform config (in devops repo) for provisioning all the resources
  needed for our AWS EKS (Elastic Kubernetes Service). There are actually a lot
  of resources needed to get a nice EKS cluster up and running, including a VPC,
  subnets, routing tables, load balancers, the EKS cluster, IAM policies, etc.
  The cluster created by this config will be used to deploy the core services
  for the Machinist app and ecosystem.
- Designed and created some interfaces for the simulator service, made a class
  diagram to outline the architecture that this service will use (check out the
  documentation file on Google Drive).
