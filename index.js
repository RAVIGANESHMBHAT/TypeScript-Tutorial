/*interface CreateObj<T extends string> {
  routes: Array<T>;
  fetchers: {
    [k in T]?: () => any;
  };
}

const makeObject = <T extends string>(obj: CreateObj<T>) => obj;

const newObj = makeObject({
  routes: ["a", "b", "c"],
  fetchers: {
    a: () => console.log("A route"),
    b: () => console.log("B route"),
  },
});

console.log(newObj);*/
//////
var obj = {
    a: 1,
    b: 2,
    c: 3
};
var getObjectKey = function (key) {
    if (key === void 0) { key = 'a'; }
    return key;
};
console.log(getObjectKey());
