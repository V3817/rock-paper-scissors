## 🪨 Stone-Paper-Scissors Game – Internal Structure

This is a basic web-based Rock-Paper-Scissors game created using **HTML**, **CSS**, and **JavaScript**. The internal structure of the project is described below:

---

### 🔧 Components Breakdown

#### 1. `index.html`

* Sets up the game layout.
* Includes:

  * A title heading
  * Three clickable choices (Rock, Paper, Scissors)
  * A scoreboard section (User score, Computer score, Result message)
  * A **reset** button to restart the game.
* Links to `style.css` and `app.js`.

#### 2. `style.css`

* Styles the layout, colors, images, buttons, and hover effects.
* Ensures:

  * Flexbox layout for choices and scoreboard
  * Responsive design
  * Highlighting on hover
  * Styling of result and reset button

#### 3. `app.js`

* Handles all game logic.
* Key functions:

  * `get_comp_choice()`: Randomly picks Rock, Paper, or Scissors.
  * `playgame(userchoice)`: Compares user vs computer choice and updates result.
  * `winner(user_win, userchoice, compchoice)`: Increments scores and shows message.
  * `draw()`: Handles draw condition.
  * `endGame()`: Stops game after 5 rounds and announces final winner.
  * `reset()`: Resets game state and UI for a new match.
* Event listeners:

  * On each `.choice` click, starts a new round
  * On reset button click, restarts the game

---

### 🧠 Game Flow Summary

1. User clicks a choice.
2. Computer randomly selects a move.
3. Result is calculated:

   * If draw → message shows draw.
   * Else → winner is decided and score is updated.
4. After 5 rounds → game ends and disables input.
5. User can click reset to restart.


