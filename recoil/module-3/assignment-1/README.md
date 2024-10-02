# Checkpoint 1: Understanding Asynchronous Selectors

## Exercise 1: Creating an Asynchronous Recoil Selector

### Task:

Create a Recoil selector that fetches data asynchronously, such as retrieving a list of products or any other data from a mocked API. The selector should manage the following states:

- **Loading**: While waiting for the data to be fetched.
- **Success**: Once the data is successfully retrieved.
- **Error**: If there is an issue during data fetching.

### Hints:

- Use the `fetch` API or any other API request mechanism you are familiar with.
- Ensure the selector returns a loading state while the request is in progress.
- Gracefully handle errors that occur during the data fetch within the selector.
