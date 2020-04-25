# Qcom.io

### Javascript Framework

#### Installation

```bash
npm install @qcom.io/qcom
```

### Or
#### (Use following code to your html file)


#### index.html (Hello World)
```html
<qcom-hello-world></qcom-hello-world>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  // Or import {$} from './node_modules/@qcom.io/qcom/index.js'
  $({
      name:'QcomHelloWorld',
      created:()=>{
          this.html(h1('Hello World'))
      }
  })
</script>
```

#### Methods
```html
<qcom-methods></qcom-methods>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomMethods',
      code:{
          updater:()=>{
              this.html(
                div(
                  h1({click:'QcomMethods.log()'},'Click Here')
                ))
          },
          log:()=>{
              //Do something here
              alert('clicked')
          }
          //Create your own functions here like log()
      }
  })
</script>
```


#### Data Management
```html
<qcom-data></qcom-data>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomData',
      data:{
          counter:0
      },
      code:{
            updater:()=>{
                this.html(div(
                    h1(this.data.counter),
                    btn({is:'md',click:'QcomData.add()'},'+'),
                    btn({is:'md',click:'QcomData.sub()'},'-')
                ))
            },
            add:()=>{
                this.update.counter = this.data.counter + 1
            },
            sub:()=>{
                    this.update.counter = this.data.counter - 1
            }
      }
  })
</script>
```

#### Loop
```html
<qcom-loop></qcom-loop>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomLoop',
      data:{
          items:[{id:1,name:'Abigail',age:21},
                {id:2,name:'max',age:29},
                {id:3,name:'Alison',age:17},
                {id:4,name:'bob',age:32},
                {id:5,name:'brad',age:36}]
      },
      code:{
            updater:()=>{
                this.html(div(
                    table(
                        tr(
                            td('Index'),
                            td('Name'),
                            td('Age')
                        ),
                        loop({
                            data:this.data.items,
                            html:tr(
                                td('#',key('id')),
                                td(key('name')),
                                td(key('age'))
                            )
                        })
                    )
                ))
            }
      }
  })
</script>
```

#### Get Api
```html
<qcom-get></qcom-get>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomGet',
      data:{
          items:[]
      },
      code:{
            updater:async ()=>{
            this.update.items = await qcom.get('https://jsonplaceholder.typicode.com/todos/')
                this.html(div(
                    table(
                        tr(
                            td('Id'),
                            td('Title'),
                            td('completed')
                        ),
                        loop({
                            data:this.data.items,
                            html:tr(
                                td(key('id')),
                                td(key('title')),
                                td('State is {{completed}}') // use {{}} inside text
                            )
                        })
                    )
                ))
            }
      }
  })

</script>
```

#### Styling (camelCase is required while using style)
```html
<qcom-css-example></qcom-css-example>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomCssExample',
      globalcss:{ /* Global CSS*/
          '*':{
              margin:'50px',
              padding:'50px'
          }
      },
      css:{ /* Internal CSS*/
          h1:{
              color:'red',
              cursor:'pointer',
              backgroundColor:'yellow'
          },
          '.mt':{
              marginTop:'5px'
          }
      },
      code:{
            updater:async ()=>{
                this.html(div(
                    h1({class:'mt',style:{ /* Inline CSS*/
                        border:'2px solid red'
                    }},'Inline Internal and global css applied successfully')
                ))
            }
      }
  })

</script>
```
<!-- #### When Then
```html
<qcom-when-then></qcom-when-then>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomWhenThen',
      data:{
          item:1
      },
      code:{
            updater:()=>{
                this.html(div(
                    when(this.data.item == 10)
                    .then(()=>h2({click:'QcomWhenThen.add()'},'This is true'))
                ))
            },
            addone:()=>{
                this.update.item = this.data.item + 1
                this.updater()
            }
      }
  })
</script>
``` -->

## License

[MIT](LICENSE)
