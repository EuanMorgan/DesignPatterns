function createObservable() {
  // Factory for creating observable objects

  return {
    // Maintain a list of subscribers
    subscribers: [],

    // Add new subscribers (callbacks)
    subscribe(fn) {
      this.subscribers.push(fn);
    },

    // Remove subscribers
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter(
        subscriber => subscriber !== fn
      );
    },

    // Run all subscribed callbacks with some data
    broadcast(data) {
      for (let subscriber of this.subscribers) {
        subscriber(data);
      }
    },
  };
}

const observer = createObservable();

const fn = data => {
  console.log('Callback was invoked with data: ', data);
};

observer.subscribe(fn);

observer.broadcast('Hello World!'); // Callback was invoked with data: Hello World!
