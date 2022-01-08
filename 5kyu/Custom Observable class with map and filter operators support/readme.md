Description
You might have heard about RxJS and Observable pattern. In the kata you have to create your own Observable class. The implementation of Observable expected in the kata is not canonical, but should not be a problem in order to get the idea how it is expected to be used in the kata(see the usage example and tests) which have to be able to support two operators map and filter. map and filter should only accept one argument which is function and behaves the same way like their counterparts in Array prototype: map and filter filter. The only difference they will only deal with a value over time which is by asynchronous nature whereas in the case with Array ones it is synchronous. See code below:

1)

var mappedArrSync = [1, 2, 3].map((value) => value + 1)
console.log(mappedArrSync) // [2, 3, 4]
mappedArrSync is alredy there and it is not expected to be changed (unless it is manually modified), map won't be called further.

2)

const mappedArrAsync = [];
const observable = new Observable()
  .map(n => n + 1);

const observer = n => mappedArrAsync.push(n);

observable.subscribe(observer);

observable.notify(1);
observable.notify(2);

setTimeout(() => {
  observable.notify(3);
}, 1000);

console.log(mappedArrAsync); // logs [2, 3]

setTimeout(() => {
  console.log(mappedArrAsync); // logs [2, 3, 4]
}, 2000);
mappedArrAsync is populeated over time and values are mapped through map method

Usage:
Only filter is used ``` const observable = new Observable() .filter(n => n > 2);
const observer = n => console.log(n);

observable.subscribe(observer);

// will log 3 and 4 [1, 2, 3, 4].map((n) => { observable.notify(n); });


2) Only _map_ is used
const observable = new Observable() .map(n => n + 1);

const observer = n => console.log(n);

observable.subscribe(observer);

// will log 2, 3, 4 and 5 [1, 2, 3, 4].map((n) => { observable.notify(n); });


3) Both _filter_ and _map_ are used
const observable = new Observable() .filter(n => n > 2) // first the values gets filtered .map(n => n * 2); // and then mapped

const observer = n => console.log(n);

observable.subscribe(observer);

// will log 6 and 8 [1, 2, 3, 4].map((n) => { observable.notify(n); });

```

In the 3) example the data comes firstly through the filter .filter(n => n > 2) and then through map .map(n => n * 2) So the value will be only emitted when both of them allow passing the data further. For example, if the value to be emitted is 1 it means it won't pass the filter (1 < 2) check so map won't event gets called.

Last but not least: it is worth to mention that function order is important, so the solution should handle possible availability of multiple maps / filters which can occur in any order.