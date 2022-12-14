# π μ¬μ  κ³Όμ : "Toodos"

νλ‘ νΈμλ μ±μ© λ©΄μ μ μμ `μ¬μ  κ³Όμ `κ° μμ΅λλ€.
μΈν°λ·°μμ μμ  λ° κ΅¬ν μμν΄μ£Όμ  λ΄μ©μ λν΄ μ§λ¬Έμ λλ¦΄ μμ μλλ€. λ©΄μ μμ νΈνκ² λ΅λ³μ ν΄μ£Όμλ©΄ λ©λλ€.

> **Note** <br />> _μ€λͺνμλ μ½λλ₯Ό ν¨κ» λ³Ό μ μλλ‘ google meetμμ **νλ©΄ κ³΅μ  μ€λΉ**λ₯Ό λΆνλλ¦½λλ€._

## π― λͺ©ν

λ³Έ κ³Όμ λ κ°λ°μμ νλ£¨ μΌκ³Ό μ€ κ°μ₯ κΈ°λ³Έμ μΈ μλ¬΄μΈ **μ½λ λ¦¬λ·°** λ° **κΈ°λ₯ κ΅¬ν**μλλ€. ν΄λΉ λ¦¬ν¬μ§ν λ¦¬λ *Toodos*λΌλ μ΄λ¦μ κ°μ§ `React.js`λ‘ μ μλ `To-do λ¦¬μ€νΈ` μ±μλλ€. μ½λ λ¦¬λ·°λ₯Ό ν΅ν΄ λ€λ₯Έ κ°λ°μλ€κ³Ό νμνλ μ€νμΌκ³Ό κΈ°μ‘΄ μ½λλ₯Ό λ¦¬ν©ν λ§νλ λ°©μμ νμνκ³ μ ν©λλ€. λν κΈ°λ₯ λͺμΈμμ λμμΈ κ°μ΄λλ₯Ό ν΅ν΄ μλ‘μ΄ κΈ°λ₯μ μ΄λ»κ² κ΅¬ννμλμ§ νμνκΈ° μν΄ μ€λΉνμ΅λλ€.

## π  Toodos κ΅¬μ‘°

`Toodos` μ±μ ν΄λ κ΅¬μ‘°μλλ€.

> **Warning** <br />> _**λ³λλ‘ μ λ¬ λ°μΌμ  api tokenμ `.env` νμΌμ μΆκ° λΆνλλ¦½λλ€.**_

```javascript
src
 β£ api
 β  β index.js
 β  β todo.js
 β£ components
 β  β£ Header.js
 β  β£ InputTodo.js
 β  β£ TodoItem.js
 β  β TodoList.js
 β£ hooks
 β  β useFocus.js
 β£ pages
 β  β Main.js
 β£ App.css
 β£ App.js
 β index.js
.env // <--- YOU NEED THIS!

```

<br/>

---

<br/>

β¨ μλ 3κ°μ§ `μ½λ λ¦¬λ·°`μ `κΈ°λ₯ κ΅¬ν`, `λ¬Έμν` νμ€ν¬λ₯Ό μν λΆνλλ¦½λλ€.

## π μ½λ λ¦¬λ·°

1. μμ±λ μ½λμ μλ λ°©λ²μ μ΅νμ  ν, κ°μ μ΄ νμνλ€κ³  νλ¨λλ λΆλΆμ΄ μλ€λ©΄ μμ ν΄μ£ΌμΈμ.
2. λ λμ νλ‘μ νΈ κ΅¬μ‘°λ, ν¨ν΄, μλ¬ μ²λ¦¬, μ€νμΌλ§, νμ€ν λ°©λ² λ± μμ λ‘­κ² μμν΄μ£ΌμΈμ.

## π  κΈ°λ₯ κ΅¬ν

μ¬μ©μκ° inputμ νμ΄νμ νλ©΄ μΌμΉνλ μμ΄νλ€μ΄ dropdownμ λ³΄μ¬μ§ μ μλλ‘ `InputTodo`μ μΆμ² κΈ°λ₯μ κ΅¬νν΄μ£Όμλ©΄ λ©λλ€.

1. [λμμΈ κ°μ΄λ](https://zpl.io/r17Wzv1)λ₯Ό μ°Έκ³ ν΄μ InputTodoμ λμμΈ μμ  λ° dropdownμ μλ‘ λ§λ€μ΄μ£ΌμΈμ. (ν΄λΉ λ§ν¬λ μ νλ¦° νλ‘μ νΈλ‘ λ―Έλ¦¬ μ΄λ©μΌλ‘ μ΄λλ₯Ό λλ¦¬κ² μ΅λλ€.)
2. Bootstrapμ΄λ Ant Design, tailwindcssμ κ°μ UI kitλ μ¬μ©νμ§ μκ³  κ΅¬νν΄ μ£ΌμΈμ.
3. Inputμ `500ms`λ‘ debounceλ₯Ό μ μ©ν΄μ£ΌμΈμ.
4. Dropdownμ μΆμ²λ μμ΄νλ€μ΄ μ²μμ 10κ°κ° λμ¬ μ μλλ‘ νκ³ , μμ΄νμ΄ λ μμΌλ©΄ λ¬΄ν μ€ν¬λ‘€λ‘ μ΅λ 10κ°μ© λ°μμ¬ μ μλλ‘ κ΅¬νν΄μ£ΌμΈμ.
5. Dropdownμμ μμ΄ν νλλ₯Ό μ ννλ©΄, inputμ valueλ μ΄κΈ°νκ° λκ³  μμ΄νμ΄ λ¦¬μ€νΈμ μΆκ°λλλ‘ κ΅¬νν΄μ£ΌμΈμ.

## π λ¬Έμν

1. μμμ μ£Όμ μ μ±κ²©μ λ°λΌ [GitHub PR](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)μ μμ± ν, κ°λ°λ λ΄μ©μ μ λ¦¬ λΆνλλ¦½λλ€. (μλ£λ λ΄μ©μ merge ν΄μ£Όμλ μ’μ΅λλ€.)
2. κ°λ°μ΄ λͺ¨λ μλ£λλ©΄ [GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)μ μ λ°μ μΌλ‘ μμ λ μ¬ν­κ³Ό κ·Έλ κ² κ°λ°λ μ΄μ λ₯Ό μμ± λΆνλλ¦½λλ€.

<br/>

---

<br/>

### π API

#### HTTP

- API: `https://interview-api.labnote.co/api`
- RESOURCE: `{ GET } /search`

#### Parameters

| Name  | Required | Type     | Default | Description             |
| ----- | -------- | -------- | ------- | ----------------------- |
| q     | yes      | `string` | -       | inputμμ κ²μνλ λ¨μ΄ |
| page  | no       | `number` | `1`     | λ°μμ¬ νμ΄μ§ λ²νΈ      |
| limit | no       | `number` | `10`    | λ°μμ¬ μ΅λ μ¬μ΄μ¦ κ°   |

#### Responses

| Status | Messsage              | data                                   |
| ------ | --------------------- | -------------------------------------- |
| 200    | Ok                    | μλ΅ λ°μ΄ν° (See Payload result)       |
| 400    | Bad Request           | `details`: μμΈ validation μλ¬ λ©μμ§ |
| 401    | You are unauthorized. | `(μΈμ¦ μ€ν¨, ν ν° νμ)`               |
| 500    | Internal Server Error | `(μλ²μΈ‘ μλ¬)`                        |

<br/>

### Payload result

| Field    | Type       | Description                            |
| -------- | ---------- | -------------------------------------- |
| `q`      | `string`   | μΏΌλ¦¬ ν€μλ                            |
| `page`   | `number`   | νμ¬ νμ΄μ§ λ²νΈ                       |
| `limit`  | `number`   | per page μ¬μ΄μ¦                        |
| `result` | `string[]` | `limit`μ΄ μ μ©λμ΄ `q`λ‘ νν°λ λ¦¬μ€νΈ |
| `qty`    | `number`   | `result`μ κΈΈμ΄                        |
| `total`  | `number`   | `q`λ‘ νν°λ μ΄ `result` κΈΈμ΄          |

#### Sample

```javascript
// Request
`{ GET } https://interview-api.labnote.co/api/search?q=lorem&page=1&limit=10`

// Response (JSON)
{
  "opcode": 200,
  "message": "OK",
  "data": {
    "q": "lorem",
    "page": 1,
    "limit": 10,
    "result": [
      "Maecenas in lorem sit amet felis volutpat dapibus vulputate at dui.",
      "Nam porta lorem ut turpis pellentesque, et efficitur felis ullamcorper.",
      "Duis fringilla turpis vel lorem eleifend, sit amet hendrerit velit gravida.",
      "Cras in felis eget augue cursus placerat ac eget lorem.",
      "Sed id orci quis mi porttitor pulvinar cursus eget lorem.",
      "Fusce tincidunt lorem ac purus elementum, ut fermentum lacus mollis.",
      "Nam commodo lorem ac posuere dignissim.",
      "Etiam eu elit finibus enim consequat scelerisque aliquam vulputate lorem.",
      "Donec in lorem id eros ornare aliquam ut a nisi.",
      "Donec efficitur nulla eget lorem sollicitudin, in blandit massa dictum."
    ],
    "qty": 10,
    "total": 19
  }
}
```

<br/>

---

<br/>

## π» λ‘μ»¬ μ€μΉ λ° μ€νλ°©λ²

1. Clone this repo:

```bash
git clone ...
```

2. Install dependencies & packages

```bash
npm i
# OR
yarn
```

3. Run application

```bash
npm run start
# OR
yarn start
```
