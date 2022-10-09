interface CreateObj<T extends string> {
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

console.log(newObj);
