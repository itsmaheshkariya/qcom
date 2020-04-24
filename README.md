# Qcom

### Javascript Framework

#### Using Npm

```npm install @qcom.io/qcom```

#### Or (Add script to head tag)

```<script src="https://unpkg.com/@qcom.io/qcom@1.0.8" type="module"></script>```

#### index.html (Hello World)
```
<qcom-hello-world></qcom-hello-world>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.8/index.js'
  $({
      class:'QcomHelloWorld',
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
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.8/index.js'
  $({
      class:'QcomDemo',
      created:()=>{
          this.html(
              div(
                  h1({click:'QcomDemo.log()'},'Click Here')
              )
          )
      },
      methods:{
          log:()=>{
              alert('clicked')      
          }
      }
  })
</script>
```


#### index.html (State Management)
```
<qcom-demo></qcom-demo>

<script type="module">
  import {$} from 'https://unpkg.com/@qcom.io/qcom@1.0.8/index.js'
  $({
      class:'QcomDemo',
      created:()=>{
          this.state(data=>{this.html(
              div(
                  h1(data.counter),
                  btn({is:'md',click:'QcomDemo.add()'},'+'),
                  btn({is:'md',click:'QcomDemo.sub()'},'-')
              )
          )})
  
        this.setState(prev_data=>({
          counter:0
        }))

      },
      methods:{
          add:()=>{
             this.setState(prev_data=>({
              counter:prev_data.counter + 1
            }))    
          },
        sub:()=>{
             this.setState(prev_data=>({
              counter:prev_data.counter - 1
            }))    
          }
      }
  })
</script>
```
