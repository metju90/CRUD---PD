# Installation

Assuming you have npm installed, run `npm i && npm start` in the root directory. the application should boot up after installing dependencies.

# Form logic

From my understand of the challenge description coupled with the information which I derived from emails, I implemented a form with fields as described here:

- 1) List of available instruments (currency pairs). User is expected to select one.
- 2) Once an instrument is selected, say `EUR/USD` pair for an example, the user
- then needs to choose one of the two currencies to invest in. The user may invest either `buy` or `sell` in the selected currency.
- 3) Limit - the user is allowed to enter any integer in this field
- 4) Valid until - The user can insert current or future date.

# Important

There is one small issue. Please read below

- Unforetunetly, by the time I started to "clean" my code and wrap this mini-project, I realized with an issue: `Cannot update during an existing state transition` which is caused by line 67 in `CreateOrder/index.jsx`. The issue is caused because I am triggering `setState` (in line 67) in the mentioned component's children. For an example, you can see line 16 in `LimitField.jsx`
- I introduced this issue after coupling my idea on form validation with Bootstrap's (https://react-bootstrap.github.io/components/forms/). If I will be allowed more time, I would be more than happy to fix this.

# Features

When it comes to introducing features, sky is the limit. In my case, except the sky, there was time too :)

- It's a React SPA. I'd rather start a new project from the group up, configuring every line of code in the bundler myself over choosing a boilerplate. However, this time round I was afraid time would not permit me. I used Create-react-app boilerplate

- Debouncing API calls

- Using Redux for state management.

- Extracted Redux's `connect` from the components. To `connect` a component I created a new component whose sole purpose is to connect. The reason behind this is to separate logic/code from visual components which are not directly related to visuals. This comes very handy when it comes to testing. See folder `connected` inside `src/components`

- To prevent unnecessary re-rendering, I am leveraging React's `memo` and `PureComponent`

- Types - typing declaration is important. However, I believed the most pragmatic approach would be to declare one type and do the others later if there will be time. Unfortunately I ran out of time.

- Form - I am a fan of Redux-Form. Once you pass its learning-curve, it speeds up developing rapidly. For this particular case I thought it would have been an "overkill" to use redux-form. Instead I decided to use Bootstrap's UI components to build the form.

- Reused components when deemed possible. (Table component).

- I opt for built-in functionalities over third party libraries. Examples: array operators, using native `fetch` for API calls.

# What I could have done better

- CSS - I did not use any processors. The design is very minimal. I did not put a great effort to structure the CSS.

- To find the relative path of certain files I used a not-so-nice technique to go one directory up until I find what I need (`../../../../`). If I had not opted for CRA, I would create an alias in my bundler such as this one https://webpack.js.org/configuration/resolve/

- To optimize the app further, I could code-split my components with dynamic imports and then lazy-load those components. This is facilitated in React 16.6 `lazy` and `suspense`

- I am not entirely happy with how I am debouncing the API. If I had more time this would be the first refactor that I'd d.

- The form is validated once the component is mounted and to no surprise, the default values of the fields are not valid. Hence, a warning message is shown on first render. I could have fixed this with either third party libraries to manage the form's inputs or to simply get a reference of the inputs from the parent class.

# Less important

- Initially I planned to do all API calls with header settings "application/json" for both `Accept` and `Content-Type`. I encountered the problem of the browser doing repetitive API calls.
- Found this answer useful https://stackoverflow.com/questions/1256593/why-am-i-getting-an-options-request-instead-of-a-get-request#answer-13030629
