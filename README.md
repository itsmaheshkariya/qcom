# Qcom.io
[![Dependency Status](https://david-dm.org/maheshkareeya/qcom.svg)](https://david-dm.org/maheshkareeya/qcom)
[![devDependency Status](https://david-dm.org/maheshkareeya/cli/dev-status.svg)](https://david-dm.org/maheshkareeya/cli#info=devDependencies)
[![NPM version](https://badge.fury.io/js/%40qcom.io%2Fqcom.svg)](https://www.npmjs.com/package/@qcom.io/qcom)
![Downloads](https://img.shields.io/npm/dm/%40qcom.io%2Fqcom.svg?style=flat)


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
      template:()=>h1('Hello World'))
  })
</script>
```

#### Functions
```html
<qcom-functions></qcom-functions>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomFunctions',
      template:()=>div(h1({click:'QcomFunctions.log()'},'Click Here'))
      code:{
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
      template:()=>div( /* div must be here to wrap all internal tags*/
                        h1(this.data.counter),
                        button({click:'QcomData.add()'},'+'),
                        button({click:'QcomData.sub()'},'-')
                     )
      code:{
            add:()=>{
                    this.data.counter += + 1
            },
            sub:()=>{
                    this.data.counter -= - 1
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
      template:()=>div(
                    table(
                        tr(
                            td('Index'),
                            td('Name'),
                            td('Age')
                        ),
                        loop({
                            data:this.data.items,
                            html:tr(
                                td('#{{id}}'),
                                td(key('name')),
                                td(key('age'))
                            )
                        })
                    )
                )
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
    template:()=>div(
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
    ),
    code:{
        updater:async ()=>{
            this.data.items = await qcom.get('https://jsonplaceholder.typicode.com/todos/')
            this.html(this.template())
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
      template:()=>div(
                        h1({class:'mt',style:{ /* Inline CSS*/
                            border:'2px solid red'
                        }},'Inline Internal and global Style')
                    )
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
## Functions

| btn({is:''})                 	| is:'sm'             	| is:'md'            	| is:'lg'            	| is:'block'                 	| is:'link'         	|
|------------------------------	|---------------------	|--------------------	|--------------------	|----------------------------	|-------------------	|
| center()                     	| left()              	|       right()      	| justify()          	| container()                	| row()             	|
| col({sm:'3',md:'6',lg:'12'}) 	| div()               	| p()                	| pre()              	| h1()                       	| h2()              	|
| h3()                         	| h4()                	| h5()               	| h6()               	| head()                     	| title()           	|
| body()                       	| ul()                	| ol()               	| li()               	| table()                    	| thead()           	|
| tbody()                      	| th()                	| tr()               	| td()               	| header()                   	| footer()          	|
| nav()                        	| button()            	| input()            	| form()             	| option()                   	| select()          	|
| span()                       	| textarea()          	| slot()             	| i()                	| view()                     	| label()           	|
| icon('material-icon')   	    | range()             	| len()              	| getid(id)        	    | gethtml(id)              	    | gettext(id)     	    |
| change(id,html)     	        | list([])         	    | color.color_name   	|                    	| find()                      	|                   	|
| click:'name.function()' 	    | rev(str)       	    | random([])         	| random_keys([])    	| random_values([])          	| String.hash()     	|
| qcom.get(url)              	| qcom.post(url,{}) 	| qcom.put(url,{}) 	    | qcom.delete(url) 	    | await import_module()    	    | camelCaseToDash() 	|
| dashToCamelCase()            	| dashToPascalCase()  	| isFunction()       	| key()            	    | loop({data:[],html:div()}) 	| when().then()     	|


## License

[MIT](LICENSE)
