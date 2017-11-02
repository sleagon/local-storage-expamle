const Koa = require("koa");
const app = new Koa();
const { GetStorage } = require("local-storage-v8");
const say = require("./say");
const asyncHooks = require("async_hooks");

const delay = seconds =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });

app
    .use(async (ctx, next) => {
        let store = GetStorage();
        store.name = ctx.query.name;
        await delay((Math.random() * 10) | 0);
        next();
    })
    .use((ctx, next) => {
        ctx.body = `hello, ${say()}.`; // you see, no need for ctx or req here.
    });

app.listen(9922);
