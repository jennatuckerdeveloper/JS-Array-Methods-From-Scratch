# JavaScript Array Methods From Scratch

This repo includes an in-depth exploration of JavaScript built-in array methods by implementing those methods from scratch. See the official JS array method docs for more on the expected parameters and behaviors of each method. And see the below resources for explanations, solutions, and test cases for this exercise.

## Relevant Sources

- Code Wars JavaScript from the inside [#1:Map](https://www.codewars.com/kata/558ccca75f511f2b0d0000f7) and [#2:Filter](https://www.codewars.com/kata/55afe435d2ce100356000032)

- Code Wars [Array#reduce](https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3)

Example:

>

    const customMap = function (fn, context = this) {
      const res = new Array(this.length)
      for (let i in this) {
        const numericI = Number(i)
        if (!isNaN(numericI))
          res[numericI] = fn.bind(context)(this[numericI], numericI, this)
      }
      return res
    }

    Array.prototype.map = customMap

## Developer Contact Info

You are welcome to contact me regarding:

- Jobs
- Alternative learning and self-learning to code
- Women and LGBTQ+ folks in tech

LinkedIn: https://www.linkedin.com/in/jenna-tucker/

Gmail: jennatuckerdeveloper[at]gmail.com
