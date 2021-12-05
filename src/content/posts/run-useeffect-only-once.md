---
title: "How to run useEffect only once"
subheader: "Say goodbye to unneccessary rerenders in React with just a simple empty array."
createdAt: "2021-11-29T15:19:28.603Z"
imageLink: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400"
imageCaption: "Photo by Cameron Venti"
unsplashLink: "https://unsplash.com/photos/I1EWTM5mFEM"
---

If you are a developer, chances are that you might have heard of the term _tutorial hell_. If you are a React developer, you might even be familiar with a certain _useEffect hell_.

```jsx
export default function Component() {
  useEffect(() => {
    // fetch data and setState
  });

  useEffect(() => {
    // window.addEventListener
  });

  useEffect(() => {
    // expensive operation inside if statements
  });

  return <div>This is an example</div>;
}
```

For those of you that are just starting out with React and React Hooks, you might have overlooked something in the above example.

These useEffects would run on **every rerender**.

We often don't want this behavior, which is why I am going to show you how to run the useEffect hook only once.

## How to run useEffect only once

To use the useEffect hook only once, you need to provide an empty array as your dependencies array like in the example below:

```jsx
useEffect(() => {
  console.log("I only ran once!");
}, []);
```

This extremely simple change makes sure that when the component mounts, this useEffect will only run on the initial render. All renders after this will be ignored.
