---
sidebar_position: 2
---

# The art of Software Engineering
This chapter provides a background on why software engineering is important. It takes into account definitions found in software engineering lectures and from my personal experience.

:::note[Summary]
The main takeaway from this chapter is that modern product development is often easier, faster and cheaper when certain software engineering techniques are used. You dont start building a house by laying a random brick on the ground. You often start with a plan, a foundation and use certain building techniques to achieve your goal. The chapter tries to explain the difference between software development and engineering.
:::

## What is Software Engineering?
The term software engineering is often used in all kinds of context: Creating a simple program, developing a new software system, algorithms and data structures. You can most likely add any buzzword to the list here. But what I often miss in the context of software engineering is the actual engineering part. Often it is only related to writing code and not the whole process of actual creating a software product. Software engineering is criticized as inadequate for modern software development <cite>[1]</cite>. But most product failures are a consequence of the following factors:

- Increasing system complexity.
- Writing code instead of software engineering.

In todays world we build larger and more complex software systems to solve problems. Which also means we need new techniques to solve these challenges for example: 

- Faster release cycles. Instead of shipping once a year most modern software solutions are shipped multiple times a day.
- More complex systems. We often have to deal with distributed systems, microservices, cloud infrastructure, etc.

Writing code is easy. Writing simple computer programs is also easy. Especially with the of AI assistants which can guide you through the process of writing computer programs. Most everyday work is done without thinking about certain techniques or principles. While I hate having every process defined with step by step introductions some techniques are useful and can help you deliver way better software solutions. 

**Engineering discipline** 
Engineers make things work. They apply theories, methods, and tools where these are appropriate. However, they use them selectively and always try to discover solutions to problems even when there are no applicable theories and methods. Engineers also recognize that they must work within organizational and financial constraints, and they must look for solutions within these constraints <cite>[1]</cite>.

**All aspects of software production**
Software engineering is not just concerned with the technical processes of software development. It also includes activities such as software project management and the development of tools, methods, and theories to support software development <cite>[1]</cite>. A software engineer should be invested in the long-term impact of their work, as well as the short-term <cite>[2]</cite>.

Consequently, most software developments take way longer and need way more resources (money) than initial planned is often a result of not using software engineering techniques.

## Why Software Engineering?
Why you should use software engineering - Explained in two key aspects and some personal opinions.

1. More and more, individuals and society rely on advanced software systems. We need to be able to produce reliable and trustworthy systems economically and quickly <cite>[1]</cite>. 

2. It is usually cheaper, in the long run, to use software engineering methods and techniques for professional software systems rather than just write programs as personal programming project. Failure to use software engineering method leads to higher costs for testing, quality assurance, and long-term maintenance <cite>[1]</cite>. 

**Software is hard.** Not from a technical perspective but from a product vision that you want to deliver. There are thousands of tools, methods and principles that you can choose from. There is no right or wrong way - We often learn from our experience what we want to improve or change in the future. 

Software is also more than just some lines of code. It includes documentation (user and technical), libraries, support topics (what if something goes wrong?), configurations, observability, metrics and much more. Software Engineering tries to capture all these aspects. From project management to delivering a product to the customer. From a business perspective you also need to make compromises in your software. You can not always deliver the perfect solution.

Software engineering brings an organized approach to this chaos of software development. Selecting the right tools and techniques for the right job. It also helps you to deliver a product faster and with less bugs.

## Software Development vs Software Engineering

You will often find mixed terms for the actual process of writing software or developing products. But often these terms are used interchangeably. The term "Engineer" is even protected in some countries and you need a degree to call yourself an engineer. I still like to differentiate between a software developer and a software engineer. 

**Software Developer** - A person who writes code and develops software. Often a person who is specialized in a certain programming language or framework. They often work with well-defined tasks and are not involved in the whole product development process. Traditionally the break down of work packages is often done by non technical people and without the input of the software developer (Which is bad but more on that later). A good software developer can solve the following tasks on their own:
- Breaking down a problem into smaller tasks
- Coding
- Testing
- Deploying
- Debugging

**Software Engineer** - A person who is involved in the whole product development process. They are often involved in the planning, design, development, testing, deployment and maintenance of a product. They are responsible for the whole product and are not just responsible for a single task. They think about long term impacts of their work and are often involved in the decision making process. Some fields software engineering involves are:

- Requirements Engineering
- Planning a product / solution. Deciding on certain approaches and analyzing the impact of these decisions.
- Building the software and tools to maintain the software
- Shipping to production and having observability in place to monitor the product
- Maintenance and update strategies
- Integrating new use cases and extending existing ones to support new business requirements
- Migration / Integration of other solutions / tools

## Next up: The blueprint

Now how will we get from software engineering techniques to an actual running software product? What are commonly encountered problems? How to choose the right tools for the right job? This and more will be discussed in the next chapter where we will start by creating a blueprint and lay the foundation on it.

## References 
- [1]: Taken from the Book [Software Engineering](https://software-engineering-book.com/) by Ian Sommerville ISBN: 978-1-292-09613-1
- [2]: Taken from the Book [The software Engineers Guidebook](https://www.engguidebook.com/) by Gergely Orosz ISBN: 978-9083381824