
# **Note** 🗒️
## -- **REMINDER** --
- [x] Configure **modal** via 2 options:
  1. manually setup react portal
  2. use headlessui that built from tailwindcss
- [ ] Configure **route** config file
- [x] Configure **use-hook-form** and **yup**
- [ ] Configure **GraphQL(Apollo Client)**
- [ ] Configure **manifest.json** file
- [ ] Change icon path in **manifext.json** file
- [x] Change page description in **_document.js** file

---

## -- **Pattern note** --
- All reusable components will be stored in **components folder**.
- All specific Page components  will be stored in **sections folder**.
- Every page **must override getLayout** function and wrap the page with a component named Layout (for authguard purpose).
- The layout of page must-have a **title** for SEO purposes.
- All imports must use **alias** path. Example: `import { something } from @path/something` instead of `import { something } from '../../../../../path/something`
- use **Headless UI** as much as possible, self-implement/hardcode may lead to the bug.
- use **React Hook Form** for implementing a form.
- use **Iconify** for icons source.


---
## -- **Tailwind note** --
### dont forget to check tailwind.config.js first !!
- **screen breakpoint**
  1. use **md** prefix for desktop breakpoint
- **color**
  1. use **specified color keywords** instead of default tailwind keywords such as `bg-text-dark` instead of `bg-gray-800` because we'll use thememode switching

# **Document** 📝

All documents for each deps that I used
### GraphQL
 - [https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/)
 - [https://github.com/vercel/next.js/tree/canary/examples/with-apollo-and-redux](https://github.com/vercel/next.js/tree/canary/examples/with-apollo-and-redux)

### IconRef
 - twotone => [https://icon-sets.iconify.design/ic/](https://icon-sets.iconify.design/ic/)
