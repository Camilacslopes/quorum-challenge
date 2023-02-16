## Overview

In this project I will collect and organize a large amount of publicly available government data. In order to visualize all of the bills that legislators voted for or against. To represent this data, I have the following important data models:

**Person** - An individual legislator elected to government. This includes everyone from President Joe Biden to Representative. David McKinley from West Virginia.

**Bill** - A piece of legislation introduced in the United States Congress.

**Vote** - A vote on a particular Bill. Bills can be voted on multiple times, as the Bill itself can undergo changes overthe course of its life. Forthe purposes of this challenge, there will only be up to 1
Vote provided for each Bill.

**VoteResult**- A vote cast by an individual legislatorfor or against a piece of legislation. Each vote
cast is associated with a specific Vote.
_________________________________________________________________________

## Deliverables

- For every legislatorin the dataset, how many bills did the legislator support (voted forthe
bill)? 
- How many bills did the legislator oppose?
- For every bill in the dataset, how many legislators supported the bill?
- How many legislators opposed the bill?
- Who was the primary sponsor of the bill?
_________________________________________________________________________

## Dependencies

1) Install [Node](https://nodejs.org/en/download/)

2) Run `npm install`

3) Start the project `node index.js`
