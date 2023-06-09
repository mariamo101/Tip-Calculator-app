# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview
This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!

### The challenge

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

<img width="1018" alt="Screenshot 2023-06-09 at 19 29 27" src="https://github.com/mariamo101/Tip-Calculator/assets/117212859/c33e8dd4-f3f5-45e2-8e5d-2f1ead43fdf6">

<img width="759" alt="Screenshot 2023-06-09 at 19 32 12" src="https://github.com/mariamo101/Tip-Calculator/assets/117212859/89422258-5b74-4b11-88b5-ca86aa67cf13">


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

The process was laborious, I am satisfied with my result and I want to be able to do more than before.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

Snippets see below:

```js
function calculate() {
    tiPamount = ((billValue * (tipValue / 100)) / peopleValue).toFixed(2);
    total = (
      (billValue + billValue * (tipValue / 100)) /
      peopleValue
    ).toFixed(2);
  
    if (billValue <= 0 || peopleValue <= 0 || peopleValue % 1 != 0) {
      tipAmount.textContent = `$0.00`;
      totalAmount.textContent = `$0.00`;
    } else {
      tipAmount.textContent = `$${tiPamount}`;
      totalAmount.textContent = `$${total}`;
    }
  }
```




