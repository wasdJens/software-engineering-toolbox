---
sidebar_position: 3
displayed_sidebar: seSidebar
---

# Working with Git

This chapter focuses on working with git and some best practices we would recommend to follow. It also highlights some tools you can use to make working with git a lot easier. 

Git is probaly the most important tool in our toolbox that each software engineer and developer should know how to use. At this point most likely everyone has heard of git or used it in some way. 

The main takeaways from this chapter is learning some ways to work with git while not focusing on a single tool or workflow. Maybe you can take something from here and integrate it into your own development workflow.

## Commit Messages (Conventional Commits)

Something I always feel is way too underrated is writing good commit messages. Commit messages are an easy and powerful documentation tool that requires next to no overhead since it already part of the normal development flow. It is also the best tool to have a history how a project evolved over the years and gives valuable insights in the thought process behind an implementation.

But often you find commit messages like this in the wild:

- `Fixed stuff`
- `Fix`
- `.` (Often used to fix pipeline related issues) (Did you know you can run your github action locally? Checkout [Act](https://github.com/nektos/act))
- `Cleanup`
- `Add`
- `Remove`

Another big problem is that commits are not grouped in some way together (especially if you dont use something like squashing commits on merge) and you often find that 26 files were touched with the message "fixed" and you have a hard time understanding what was the intention behind the change. 

Something that I like to use for more casual or personal projects is to use [gitmoji](https://gitmoji.dev/) to give a visual indication what kind of change was made. While this is not really helping in better understanding the history of a program or make much sense of the commit message it is a first step in the right direction. 

But I have started to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) more and more and I think it really helps in understanding commit message and is a great guide to empower the message you as a developer want to send to others over the years the project grows. 

Conventional Commits are an specification that is easily understand by humans but can also be read by machines. This helps in automating certain devops processes by easily linking a commit to a certain environment or other workflow. 

The convention follows a small set of rules and is based on the semver versioning by desciring the type of change made in a single commit (feature, fix and breaking changes).

The commit message is structured like the following example:

```
<type> [optional scope]: <description>

[optional body]

[optional footers]
```

The specification includes two types of commit messages: `fix`, `feat` but I like to add more than two types (Which is allowed) and are used for example by the angular team: `build`, `ci`, `docs`, `style`, `refactor`, `perf`, `test` and `chore`. The great thing about conventional commits you can easily indicate a breaking change to either an API or any other part of your software system that may break other integrations by using a `!` after the type and a footer with `BREAKING CHANGE:` as message.

Lead by your own example. If you start writing good commit messages others will start to follow. While it is often hard to get a large development team (> 3 People) to agree on a convention I often like to lead by example. It also helps to have easy tooling in place that automates most of these tasks for you.

## Lint your commit messages

How can we enforce that everyone follows the same convention? You can also use a linter for your commit messages. For example you can verify conventional commits with the following linter: [Commitlint](https://github.com/conventional-changelog/commitlint).

## Git Hooks (Husky)

But most folks work with git on their own machine. How can we ensure that certain policies are always applied? We can make use of git hooks which are scripts that are executed on certain git events. For example you can run a script before a commit is made to lint the commit message. For NodeJS projects you can use [Husky](https://typicode.github.io/husky/) and setup a pre-commit hook to lint your commit messages.

This way when you do a commit on your machine it runs the git hook and verifies with commit lint that your commit message follows the conventional commits guidelines. This way you will get a pretty clean git history without much overhead for the developer since most of these tasks can be automated.

## Conclusion

Git on its own is a powerful tool but with certain conventions how to make your commit messages you can bring git to the next level and automatically have a clear documentation how your project evolved over time. I advise you to try out conventional commits and see if it works for you.