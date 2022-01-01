# gridsome-plugin-typescript

> Typescript plugin for Gridsome

### Quick orview

This plugin enable Typescript lang inside yours `*.vue` **Single File Components**.

### Install

In order to work with this plugin you'll need to install the dependencies below. Choose one method of your preference to install it.

* `yarn add -D typescript ts-loader gridsome-plugin-typescript`
* `npm install -D typescript ts-loader gridsome-plugin-typescript`
* add `typescript`, `ts-loader`, and `gridsome-plugin-typescript` in `devDependencies` section in your `package.json` file.

### Usage

**1.** Add `gridsome-plugin-typescript` in your `gridsome.config`

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    }
  ]
}
```

**2.** Create a `tsconfig.json` file at the root directory of your project with the content below:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "es2015",
        "moduleResolution": "node",
        "noImplicitReturns": true,
        "outDir": "./built/",
        "sourceMap": true,
        "strict": true
    },
    "include": [
        "./src/**/*"
    ]
}
```

**3.** Create a `vue-shims.d.ts` in your `src` folder with the following content:

```javascript
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```

**4.** Rename your index.js file to index.ts if not done automatically.

**5.** For now, you can use `lang="ts"` in your `*.vue` files like this:

```html
<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
      props: ['name', 'initialEnthusiasm'],
      data() {
          return {
              enthusiasm: this.initialEnthusiasm,
          }
      },
      methods: {
          increment() { this.enthusiasm++; },
          decrement() {
              if (this.enthusiasm > 1) {
                  this.enthusiasm--;
              }
          },
      },
      computed: {
          exclamationMarks(): string {
              return Array(this.enthusiasm + 1).join('!');
          }
      }
  });
</script>
```

### Want to contribute

If you want to contribute through code or documentation, the [Contributing guide](CONTRIBUTING.md) is the best place to start. If you have questions, feel free to ask.

### Related

* [Typescript Starter for Gridsome](https://github.com/cleitonper/gridsome-starter-typescript#readme)
* [Typescript starter for Vue (only for reference)](https://github.com/Microsoft/TypeScript-Vue-Starter)
* [`tsconfig.json` reference](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#readme)
