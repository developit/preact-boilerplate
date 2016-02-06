# Preact Boilerplate / Starter Kit

> :guitar: Ready-to-rock [Preact] starter project, powered by [webpack].
>
> :rocket: If you're starting a new project using [Preact], you've come to the right place.
Below is a step-by-step guide that takes you straight from downloading this boilerplate to production.
>
> **[:boom: View Demo :boom:](https://preact-boilerplate.surge.sh)**


---


# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)
- [Handling URLS](#handling-urls)


## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 git@github.com:developit/preact-boilerplate.git my-app
cd my-app
```


**2. Make it your own:**

```sh
npm init
```

> :information_source: This sets up your NPM project.


**3. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
PORT=8080 npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**5. Generate a production build in `./build`:**

```sh
npm run build
```

You can now deploy the contents of the `build` directory to production!

> **Example:** deploy to [surge.sh](https://surge.sh):
>
> `surge ./build -d my-app.surge.sh`


---


## Structure

Apps are built up from simple units of functionality called Components. A Component is responsible for rendering a small part of an application, given some input data called `props`, generally passed in as attributes in JSX. A component can be as simple as:

```js
class Link extends Component {
  render({ to, children }) {
    return <a href={ to }>{ children }</a>;
  }
}
// usage:
<Link to="/">Home</Link>
```



## Handling URLS

:information_desk_person: This project contains a basic two-page app with [URL routing](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```


---


## License

MIT


[Preact]: https://developit.github.io/preact
[webpack]: https://webpack.github.io
