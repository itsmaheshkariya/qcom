# Qcom.io
[![Dependency Status](https://david-dm.org/maheshkareeya/qcom.svg)](https://david-dm.org/maheshkareeya/qcom)
[![devDependency Status](https://david-dm.org/maheshkareeya/cli/dev-status.svg)](https://david-dm.org/maheshkareeya/cli#info=devDependencies)
[![NPM version](https://badge.fury.io/js/%40qcom.io%2Fqcom.svg)](https://www.npmjs.com/package/@qcom.io/qcom)
![Downloads](https://img.shields.io/npm/dm/%40qcom.io%2Fqcom.svg?style=flat)
![demoofqcom](https://unpkg.com/@qcom.io/qcom@latest/qcom.png)
### Javascript Framework

#### Installation

```bash
npm install @qcom.io/qcom
```
### Or
#### CLI Installation for Quick Start
```bash
npm install -g @qcom.io/qcom-cli
qcom --install
```
### check url
http://localhost:8080

### Or
#### (Use following code to your html file)

```html
<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  // Or import {$} from './node_modules/@qcom.io/qcom/index.js'
  $() // Now check your Inspector of Browser He will guide you for further steps
</script>
```
#### index.html
```html
<qcom-hello-world></qcom-hello-world>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  // Or import {$} from './node_modules/@qcom.io/qcom/index.js'
  $({
      name:'QcomHelloWorld',
      template:()=>h1('Hello World')
  })
</script>
```

## Rules 
```html 
<h1 class="head"  style = "color:red;  background-color:  yellow"    id="heading" > I am H1 </h1>
```
```js
h1({class:'head', style:{ color:'red', backgroundColor : 'Yellow' }, id:'heading' }, 'I am H1' )
```

#### Functions
```html
<qcom-functions></qcom-functions>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
  $({
      name:'QcomFunctions',
      template:()=>div(h1({click:'QcomFunctions.log()'},'Click Here')),
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
                     ),
      code:{
            add:()=>{
                    this.data.counter +=  1
                    this.updater()
            },
            sub:()=>{
                    this.data.counter -=  1
                    this.updater()
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
            this.data.items.map(item =>
                    tr(
                        td(item.id),
                        td(item.name),
                        td(item.age))
                        )
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
            this.data.items.map(item =>
                    tr(
                        td(item.id),
                        td(item.title),
                        td(item.completed))
                        )
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
#### Qcom Router
```html
<qcom-main></qcom-main>
<script type="module">
import {$} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
    $({
        name:'QcomOne',template:()=>div(
            h1('Page One')
        )
    })
    $({
        name:'QcomTwo',template:()=>div(
            h1('Page Two')
        )
    })
    $({
        name:'QcomError',template:()=>div(
            h1('404 Page')
        )
    })
    $({
        name:'QcomMain',
        template:()=>div(
                appbar(
                    btn({route:'/QcomOne',is:'link', class:'ml12'},'One'),
                    btn({route:'/QcomTwo',is:'link', class:'ml12'},'Two'),
                    btn({route:'/QcomError',is:'link', class:'ml12'},'404')
                ),
                div({class:'mt12', id:'root'})
            ),
            router:{
                root:'QcomOne',
                view:'root',
                error:$('QcomError')(),
                links:['QcomOne','QcomTwo']
            }
    })
</script>

```




#### Complete Example (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QcomJs</title>
</head>
<body>
    <qcom-app></qcom-app>
</body>
</html>
<script type="module">
import {$,color} from 'https://unpkg.com/@qcom.io/qcom@latest/index.js'
    $({
        name:'QcomApp',
        template:()=>div(
                appbar(
                    hamburger_menu(
                        ul({class:'menu'},
                            li({route:'/QcomOne',class:'item'},'QcomOne'),
                            li({route:'/QcomTwo',class:'item'},'QcomTwo'))),
                    btn({is:'link',class:'ml12'},'Appbar')
                ),
                div({class:'mt12', id:'root'})

            ),
        code:{
            onload:async()=>{
                let {QcomOne,QcomTwo,QcomError} = await import_module('./main.js')
                $(QcomOne)
                $(QcomTwo)
                $(QcomError)
            }
        },
        router:{
            root:'QcomOne',
            view:'root',
            error:$('QcomError')(),
            links:['QcomOne','QcomTwo']
        },
        theme: {
            background: color.orange_darken_1,
            color: color.white,
            hover: color.orange_acent_1,
            font: ''
        }
    })
</script>
```
#### (main.js)
```js
export let QcomOne = {
    name:'QcomOne',
    type:'shadow',
    data:{
        items:[
            {name:'mahesh'},{name:'dipak'}
        ]
    },
    template:()=>div(h1('Page One'),
            ()=>this.data.items.map(item =>
                    div(item.name)))
}

export let QcomTwo ={
    name:'QcomTwo',
    data:{
        items:[]
    },
    template:()=>row(
        col(form(
            material(
                h1('Registration'),
                input({id:'name',class:'mb6',placeholder:'Name'}),
                input({id:'email',class:'mb6',placeholder:'Email'}),
                input({id:'password',class:'mb6',placeholder:'Password'}),
                right(btn({click:'QcomTwo.post()',is:'md'},'Submit')))
        )),
        col(table(
            tr(
                td('Name'),
                td('Email'),
                td('Password')
            ),
            ()=>this.data.items.map(item =>
                    tr(td(item.name),
                        td(item.email),
                        td(item.password)))
        ))
    ),
    code:{
        post:()=>{
            this.data.items.push({
                name:getval('name'),
                email:getval('email'),
                password:getval('password')
            })
            this.render()
        }
    }
}

export let QcomError = {
    name:'QcomError',
    template:()=>div(h1('404 Page'))
}

```
### Demo
![demoofqcom](https://unpkg.com/@qcom.io/qcom@latest/result.png)

## Functions

| btn({is:''})                 	| is:'sm'             	| is:'md'            	| is:'lg'            	| is:'block'                 	| is:'link'         	|
|------------------------------	|---------------------	|--------------------	|--------------------	|----------------------------	|-------------------	|
| center()                     	| left()              	|right()      	        | justify()          	| container()                	| row()             	|
| col(is:'12-6-6') 	| div()               	| p()                	| pre()              	| h1()                       	| h2()              	|
| h3()                         	| h4()                	| h5()               	| h6()               	| head()                     	| title()           	|
| body()                       	| ul()                	| ol()               	| li()               	| table()                    	| thead()           	|
| tbody()                      	| th()                	| tr()               	| td()               	| header()                   	| footer()          	|
| nav()                        	| button()            	| input()            	| form()             	| option()                   	| select()          	|
| span()                       	| textarea()          	| slot()             	| i()                	| view()                     	| label()           	|
| icon('material-icon')   	    | range()             	| len()              	| getid(id)        	    | gethtml(id)              	    | gettext(id)     	    |
| change(id,html)     	        | list([])         	    | color.color_name   	|                    	| find()                      	|                   	|
| click:'name.function()' 	    | rev(str)       	    | random([])         	| random_keys([])    	| random_values([])          	| String.hash()     	|
| qcom.get(url)              	| qcom.post(url,{}) 	| qcom.put(url,{}) 	    | qcom.delete(url) 	    | await import_module()    	    | camelCaseToDash() 	|
| dashToCamelCase()            	| dashToPascalCase()  	| isFunction()       	|             	    | 


## License

[MIT](LICENSE)
