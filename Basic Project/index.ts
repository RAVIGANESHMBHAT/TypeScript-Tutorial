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

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKeys = keyof typeof obj;

function getObjectKey(): 1;
function getObjectKey<TKey extends ObjKeys>(key: TKey): typeof obj[TKey];
function getObjectKey(key: ObjKeys = "a") {
  return obj[key];
}

console.log(getObjectKey());
console.log(getObjectKey("b"));
