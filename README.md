# Qcom

### Javascript Framework

#### Using Npm

```npm install @qcom.io/qcom```

#### Or (Use following code to your html file)


#### index.html (Hello World)
```
<qcom-hello-world></qcom-hello-world>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.9/index.js'
  $({
      name:'QcomHelloWorld',
      created:()=>{
          this.html(h1('Hello World'))
      }
  })
</script>
```

#### index.html (Methods)
```
<qcom-demo></qcom-demo>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.9/index.js'
  $({
      name:'QcomDemo',
      methods:{
          updater:()=>{
              this.html(
                div(
                  h1({click:'QcomDemo.log()'},'Click Here')
                ))
          },
          log:()=>{
              alert('clicked')      
          }
      }
  })
</script>
```


#### index.html (Data Management)
```
<qcom-demo></qcom-demo>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.9/index.js'
  $({
      name:'QcomDemo',
      data:{
          counter:0
      },
      code:{
            updater:()=>{
                this.html(div(
                    h1(this.data.counter),
                    btn({is:'md',click:'QcomDemo.add()'},'+'),
                    btn({is:'md',click:'QcomDemo.sub()'},'-')
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
