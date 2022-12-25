# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is the tip calculator project from Frontend Mentor. My first Junior level project. 

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://github.com/kelso540/tip-calculator](https://github.com/kelso540/tip-calculator)
- Live Site URL: [https://precious-seahorse-ba9ecb.netlify.app/](https://precious-seahorse-ba9ecb.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

Things for me to remember...

Adding a blank "" when changing styles with javascript returns the default attributes.
.focus() in javascript will trigger :focus CSS attributes. 
.toFixed(2) will make only 2 decimals show on results in javascript. 
Add Number() around number variables in javascript when using + to avoid combining string values. 
Contain content in div to make absolute position stay in div with child elements. 

Code snippets to remember:

```css
.dollarInputDiv{
    contain: content;
}
```
```js
selections.peopleInput.style.outline = ""; 
selections.peopleInput.style.border = ""; 
selections.peopleInput.style.borderRadius = "";

selections.customInput.focus()

selections.tipTotal.value = `$${values.tip.toFixed(2)}`

values.total = Number(selections.billTotal.value) + Number(values.tip);
```

## Author

- Website - [Kelsey Jackson](https://portfolio-react-project.netlify.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)