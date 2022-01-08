class Observable {
    constructor() {
      this.handlers = [];
      this.subscribers = [];
    }
    
    
    map(f) {
      this.handlers.push({type: 'm', f});
      return this;
    }
    
    filter(f) {
      this.handlers.push({type: 'f', f});
      return this;
    }
    
    
    subscribe(f) {
      this.subscribers.push(f);
    }
    
    notify(value) {
      let newValue = value;
      for (let handler of this.handlers) {
        // Map
        if (handler.type === 'm') {
          newValue = handler.f(newValue);
        }
        // Filter
        if (handler.type === 'f' && !handler.f(newValue)) {
          return;
        }
      }
      
      this.subscribers.forEach(subscriber => subscriber(newValue));
    }
  }