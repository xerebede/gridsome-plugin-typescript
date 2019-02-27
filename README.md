# gridsome-plugin-typescript

> Typescript plugin for Gridsome

### Quick orview

This plugin enable Typescript lang inside yours `*.vue` **Single File Components**.

### Install

* `yarn add -D gridsome-plugin-typescript`
* `npm install -D gridsome-plugin-typescript`

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

**4.** For now, you can use `lang="ts"` in your `*.vue` files like this:

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

### Related

* [Typescript Starter for Gridsome](https://github.com/cleitonper/gridsome-starter-typescript#readme)
* [Typescript starter for Vue (only for reference)](https://github.com/Microsoft/TypeScript-Vue-Starter)
* [`tsconfig.json` reference](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#readme)
