/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable semi */
// Файл лежит в репозитории github, редактирую его и т.п. в VS Code. С помощью git передаю
// его на github. Node.js в терминале.

// console.log('Hello, Misha!')
// console.log(Math.round(5.34))

/*
import fs from 'fs'
import _ from 'lodash'

console.log(_.intersection([2, 1], [2, 3]))
console.log(_.capitalize('hello'))
console.log(_.last(['one', 'two']))
console.log(_.compact([0, 1, false, 2, '', 3]))
console.log(_.union([2], [1, 2]))
console.log(_.zip(['a', 'b'], [1, 2], [true, false]))

const object = { a: { b: 2 } }
console.log(_.has(object, ['a', 'b']))
console.log(_.get(object, 'a.b.c', 'default'))
*/

// ********** Object #3 **********
// const user = {
//   name: 'Misha',
//   married: true,
//   age: 25,
// }
// console.log(user)

// user['married'] = false
// user['surname'] = 'Yurko'
// console.log(user)

// const user = { name: 'Maria' }
// user.name = 'Igor'
// console.log(user)

// const course = {}
// course.name = 'Хекслет – JS: Объекты'
// course.description = 'Самый классный курс на свете, не проходите мимо, дети!'

// delete course.description
// console.log(course)

import _ from 'lodash'
import normalize from './lesson.js'

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
}

normalize(lesson)
console.log(lesson)
