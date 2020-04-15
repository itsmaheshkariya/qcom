// most imp
// export class Html{
//     constructor(gethtmlcontent){
//         this.gethtmlcontent = gethtmlcontent
//     }
//     toHtml(){
//         console.log(this.gethtmlcontent)
//         return `<h1>${this.gethtmlcontent}</h1>`
//     }
// }
// return div({class:'hello demo ok',style:{color:"red"}},()=>
// {
//         let newHtml = ``;
//         for(let i=1;i<=4;i++)
//             newHtml +=h1(i)
//         return newHtml

// }
// )

window.onload = function () {
    document.addEventListener('input',async(e)=>{
        document.querySelectorAll('[to]').forEach(el => {
            if(el.getAttribute('to') == e.target.getAttribute('to')){
                if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
                    el.value = e.target.value
                }else{
                    el.innerText = e.target.value
                }
            }
        });

    },false)

    this.document.addEventListener('click',async(e)=>{
        if(e.target.hasAttribute('call')){
            let store = camelCaseToDash(e.target.getAttribute('call').split('.')[0])
            let allMethods = document.querySelector(store).methods
            Object.keys(allMethods).forEach((item,index)=>{
                if(e.target.getAttribute('call').split('.')[1].split('(')[0] == item){
                    Object.values(allMethods)[index]()
                }
            })

        }
    })
 }


export let color = {
    red_lighten_5:'#ffebee',
    red_lighten_4:'#ffcdd2',
    red_lighten_3:'#ef9a9a',
    red_lighten_2:'#e57373',
    red_lighten_1:'#ef5350',

    red:'#f44336',

    red_darken_1:'#e53935',
    red_darken_2:'#d32f2f',
    red_darken_3:'#c62828',
    red_darken_4:'#b71c1c',

    red_accent_1:'#ff8a80',
    red_accent_2:'#ff5252',
    red_accent_3:'#ff1744',
    red_accent_4:'#d50000',



    pink_lighten_5:'#fce4ec',
    pink_lighten_4:'#f8bbd0',
    pink_lighten_3:'#f48fb1',
    pink_lighten_2:'#f06292',
    pink_lighten_1:'#ec407a',

    pink:'#e91e63',

    pink_darken_1:'#d81b60',
    pink_darken_2:'#c2185b',
    pink_darken_3:'#ad1457',
    pink_darken_4:'#880e4f',

    pink_accent_1:'#ff80ab',
    pink_accent_2:'#ff4081',
    pink_accent_3:'#f50057',
    pink_accent_4:'#c51162',


    purple_lighten_5:'#f3e5f5',
    purple_lighten_4:'#e1bee7',
    purple_lighten_3:'#ce93d8',
    purple_lighten_2:'#ba68c8',
    purple_lighten_1:'#ab47bc',

    purple:'#9c27b0',

    purple_darken_1:'#8e24aa',
    purple_darken_2:'#7b1fa2',
    purple_darken_3:'#6a1b9a',
    purple_darken_4:'#4a148c',

    purple_accent_1:'#ea80fc',
    purple_accent_2:'#e040fb',
    purple_accent_3:'#d500f9',
    purple_accent_4:'#aa00ff',



    deep_purple_lighten_5:'#ede7f6',
    deep_purple_lighten_4:'#d1c4e9',
    deep_purple_lighten_3:'#b39ddb',
    deep_purple_lighten_2:'#9575cd',
    deep_purple_lighten_1:'#7e57c2',
    deep_purple:'#673ab7',
    deep_purple_darken_1:'#5e35b1',
    deep_purple_darken_2:'#512da8',
    deep_purple_darken_3:'#4527a0',
    deep_purple_darken_4:'#311b92',
    deep_purple_accent_1:'#b388ff',
    deep_purple_accent_2:'#7c4dff',
    deep_purple_accent_3:'#651fff',
    deep_purple_accent_4:'#6200ea',

    indigo_lighten_5:'#e8eaf6',
    indigo_lighten_4:'#c5cae9',
    indigo_lighten_3:'#9fa8da',
    indigo_lighten_2:'#7986cb',
    indigo_lighten_1:'#5c6bc0',
    indigo:'#3f51b5',
    indigo_darken_1:'#3949ab',
    indigo_darken_2:'#303f9f',
    indigo_darken_3:'#283593',
    indigo_darken_4:'#1a237e',
    indigo_accent_1:'#8c9eff',
    indigo_accent_2:'#536dfe',
    indigo_accent_3:'#3d5afe',
    indigo_accent_4:'#304ffe',

    blue_lighten_5:'#e3f2fd',
    blue_lighten_4:'#bbdefb',
    blue_lighten_3:'#90caf9',
    blue_lighten_2:'#64b5f6',
    blue_lighten_1:'#42a5f5',
    blue:'#2196f3',
    blue_darken_1:'#1e88e5',
    blue_darken_2:'#1976d2',
    blue_darken_3:'#1565c0',
    blue_darken_4:'#0d47a1',
    blue_accent_1:'#82b1ff',
    blue_accent_2:'#448aff',
    blue_accent_3:'#2979ff',
    blue_accent_4:'#2962ff',

    light_blue_lighten_5:'#e1f5fe',
    light_blue_lighten_4:'#b3e5fc',
    light_blue_lighten_3:'#81d4fa',
    light_blue_lighten_2:'#4fc3f7',
    light_blue_lighten_1:'#29b6f6',
    light_blue:'#03a9f4',
    light_blue_darken_1:'#039be5',
    light_blue_darken_2:'#0288d1',
    light_blue_darken_3:'#0277bd',
    light_blue_darken_4:'#01579b',
    light_blue_accent_1:'#80d8ff',
    light_blue_accent_2:'#40c4ff',
    light_blue_accent_3:'#00b0ff',
    light_blue_accent_4:'#0091ea',

    cyan_lighten_5:'#e0f7fa',
    cyan_lighten_4:'#b2ebf2',
    cyan_lighten_3:'#80deea',
    cyan_lighten_2:'#4dd0e1',
    cyan_lighten_1:'#26c6da',
    cyan:'#00bcd4',
    cyan_darken_1:'#00acc1',
    cyan_darken_2:'#0097a7',
    cyan_darken_3:'#00838f',
    cyan_darken_4:'#006064',
    cyan_accent_1:'#84ffff',
    cyan_accent_2:'#18ffff',
    cyan_accent_3:'#00e5ff',
    cyan_accent_4:'#00b8d4',

    teal_lighten_5:'#e0f2f1',
    teal_lighten_4:'#b2dfdb',
    teal_lighten_3:'#80cbc4',
    teal_lighten_2:'#4db6ac',
    teal_lighten_1:'#26a69a',
    teal:'#009688',
    teal_darken_1:'#00897b',
    teal_darken_2:'#00796b',
    teal_darken_3:'#00695c',
    teal_darken_4:'#004d40',
    teal_accent_1:'#a7ffeb',
    teal_accent_2:'#64ffda',
    teal_accent_3:'#1de9b6',
    teal_accent_4:'#00bfa5',

    green_lighten_5:'#e8f5e9',
    green_lighten_4:'#c8e6c9',
    green_lighten_3:'#a5d6a7',
    green_lighten_2:'#81c784',
    green_lighten_1:'#66bb6a',
    green:'#4caf50',
    green_darken_1:'#43a047',
    green_darken_2:'#388e3c',
    green_darken_3:'#2e7d32',
    green_darken_4:'#1b5e20',
    green_accent_1:'#b9f6ca',
    green_accent_2:'#69f0ae',
    green_accent_3:'#00e676',
    green_accent_4:'#00c853',

    light_green_lighten_5:'#f1f8e9',
    light_green_lighten_4:'#dcedc8',
    light_green_lighten_3:'#c5e1a5',
    light_green_lighten_2:'#aed581',
    light_green_lighten_1:'#9ccc65',
    light_green:'#8bc34a',
    light_green_darken_1:'#7cb342',
    light_green_darken_2:'#689f38',
    light_green_darken_3:'#558b2f',
    light_green_darken_4:'#33691e',
    light_green_accent_1:'#ccff90',
    light_green_accent_2:'#b2ff59',
    light_green_accent_3:'#76ff03',
    light_green_accent_4:'#64dd17',

    lime_lighten_5:'#f9fbe7',
    lime_lighten_4:'#f0f4c3',
    lime_lighten_3:'#e6ee9c',
    lime_lighten_2:'#dce775',
    lime_lighten_1:'#d4e157',
    lime:'#cddc39',
    lime_darken_1:'#c0ca33',
    lime_darken_2:'#afb42b',
    lime_darken_3:'#9e9d24',
    lime_darken_4:'#827717',
    lime_accent_1:'#f4ff81',
    lime_accent_2:'#eeff41',
    lime_accent_3:'#c6ff00',
    lime_accent_4:'#aeea00',

    yellow_lighten_5:'#fffde7',
    yellow_lighten_4:'#fff9c4',
    yellow_lighten_3:'#fff59d',
    yellow_lighten_2:'#fff176',
    yellow_lighten_1:'#ffee58',
    yellow:'#ffeb3b',
    yellow_darken_1:'#fdd835',
    yellow_darken_2:'#fbc02d',
    yellow_darken_3:'#f9a825',
    yellow_darken_4:'#f57f17',
    yellow_accent_1:'#ffff8d',
    yellow_accent_2:'#ffff00',
    yellow_accent_3:'#ffea00',
    yellow_accent_4:'#ffd600',

    amber_lighten_5:'#fff8e1',
    amber_lighten_4:'#ffecb3',
    amber_lighten_3:'#ffe082',
    amber_lighten_2:'#ffd54f',
    amber_lighten_1:'#ffca28',
    amber:'#ffc107',
    amber_darken_1:'#ffb300',
    amber_darken_2:'#ffa000',
    amber_darken_3:'#ff8f00',
    amber_darken_4:'#ff6f00',
    amber_accent_1:'#ffe57f',
    amber_accent_2:'#ffd740',
    amber_accent_3:'#ffc400',
    amber_accent_4:'#ffab00',

    orange_lighten_5:'#fff3e0',
    orange_lighten_4:'#ffe0b2',
    orange_lighten_3:'#ffcc80',
    orange_lighten_2:'#ffb74d',
    orange_lighten_1:'#ffa726',
    orange:'#ff9800',
    orange_darken_1:'#fb8c00',
    orange_darken_2:'#f57c00',
    orange_darken_3:'#ef6c00',
    orange_darken_4:'#e65100',
    orange_accent_1:'#ffd180',
    orange_accent_2:'#ffab40',
    orange_accent_3:'#ff9100',
    orange_accent_4:'#ff6d00',

    deep_orange_lighten_5:'#fbe9e7',
    deep_orange_lighten_4:'#ffccbc',
    deep_orange_lighten_3:'#ffab91',
    deep_orange_lighten_2:'#ff8a65',
    deep_orange_lighten_1:'#ff7043',
    deep_orange:'#ff5722',
    deep_orange_darken_1:'#f4511e',
    deep_orange_darken_2:'#e64a19',
    deep_orange_darken_3:'#d84315',
    deep_orange_darken_4:'#bf360c',
    deep_orange_accent_1:'#ff9e80',
    deep_orange_accent_2:'#ff6e40',
    deep_orange_accent_3:'#ff3d00',
    deep_orange_accent_4:'#dd2c00',

    brown_lighten_5:'#efebe9',
    brown_lighten_4:'#d7ccc8',
    brown_lighten_3:'#bcaaa4',
    brown_lighten_2:'#a1887f',
    brown_lighten_1:'#8d6e63',
    brown:'#795548',
    brown_darken_1:'#6d4c41',
    brown_darken_2:'#5d4037',
    brown_darken_3:'#4e342e',
    brown_darken_4:'#3e2723',

    grey_lighten_5:'#fafafa',
    grey_lighten_4:'#f5f5f5',
    grey_lighten_3:'#eeeeee',
    grey_lighten_2:'#e0e0e0',
    grey_lighten_1:'#bdbdbd',
    grey:'#9e9e9e',
    grey_darken_1:'#757575',
    grey_darken_2:'#616161',
    grey_darken_3:'#424242',
    grey_darken_4:'#212121',

    blue_grey_lighten_5:'#eceff1',
    blue_grey_lighten_4:'#cfd8dc',
    blue_grey_lighten_3:'#b0bec5',
    blue_grey_lighten_2:'#90a4ae',
    blue_grey_lighten_1:'#78909c',
    blue_grey:'#607d8b',
    blue_grey_darken_1:'#546e7a',
    blue_grey_darken_2:'#455a64',
    blue_grey_darken_3:'#37474f',
    blue_grey_darken_4:'#263238',

    black:'#000000',
    white:'#ffffff',
}


export class State {
    constructor(callback) {

        if (typeof callback !== "function") {
            throw new Error("Callback should be a function");
        }
        this.updater = callback;
        this._internalState = {};
        this.stateStack = [];
        this.processQueue = this.processQueue.bind(this);
        this.callUpdater = this.callUpdater.bind(this);
        this.setState = this.setState.bind(this);
    }

    get state() {
        return this._internalState;
    }

    set state(val) {
        throw new Error("Do not set state directly. Use 'setState()' instead");
    }

    setState(arg) {
        this.stateStack.push(arg);
        this._cancelIdleCallback(this.idleCallback);
        this.idleCallback = this._requestIdleCallback(this.processQueue, { timeout: 1000 });
    }

    processQueue() {
        this.stateStack.reduce((prevState, arg) => {
            let newState = (typeof arg === "function" ) ? arg(prevState) : arg;

            if (typeof newState === "object") {
                return Object.assign(prevState, newState);
            } else {
                throw new Error("New state should be an Obj");
            }
        }, this._internalState);
        this.stateStack = [];

        this.updaterCallback = window.requestAnimationFrame(this.callUpdater);
    }

    callUpdater() {
        this.updater(this.state);
    }

    _isRequestIdleCallbackSupported() {
        return (typeof requestIdleCallback !== 'undefined');
    }

    _fallbackIdleCallback(callback) {
        return setTimeout(() => {
            const start = Date.now();
            console.log("Using fallback");
            callback({
                didTimeout: false,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
            });
        }, 1);
    }

    _requestIdleCallback(...args) {
        return this._isRequestIdleCallbackSupported() ? requestIdleCallback(...args) : this._fallbackIdleCallback(...args);
    }
    _cancelIdleCallback(...args) {
        return this._isRequestIdleCallbackSupported() ? cancelIdleCallback(...args) : clearTimeout(...args);
    }
}




export let $sw = async(val) => {

    if ('serviceWorker' in navigator) {
        try {
        await navigator.serviceWorker.register(val);
        } catch (e) {
        console.log(`SW registration failed`);
        }
    }

}

String.prototype.hash = function() {

    if (Array.prototype.reduce) {
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    } else {

        var hash = 0, i, chr, len;
        if (this.length == 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};

// let name = "Maheshkariya"
// console.log(name.hash())

export let level = (level,ele) =>{
    // https://www.w3schools.com/jsref/prop_node_parentelement.asp
    // console.log(ele.nodeName)
    // console.log(ele.parentNode)
    // console.log(ele.className)
    if(typeof ele == 'object')
    {   let temp = ele
        for(let i in range(level)){
            temp = temp.parentElement
        }
    return temp.getRootNode().host
    }else if(typeof ele == 'string'){
        let temp = 'this'
        for(let i in range(level)){
            temp = temp+'.parentElement'
        }
        return temp+'.getRootNode().host.'+ele
    }else{
        console.log('daddy calling itself')
    }
}
// export let papa = (ele) =>{
//     return 'this.parentElement.getRootNode().host'+ele;
// }
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
// export let getAllTos = () =>
// {
//         let arr = []
//         document.querySelectorAll('*').forEach(el => {
//             if(el.getAttribute('to') != null){
//                 arr.push(el.getAttribute('to'))
//                 console.log(el.getAttribute('to'))
//             }})
// console.log(arr)
// return arr
// }
export let camelCaseToDash = ( str ) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
export let dashToCamelCase = ( myStr ) => {
    return myStr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export let dashToPascalCase = (myStr) =>{
    return dashToCamelCase(myStr.replaceAt(0, myStr[0].toUpperCase()))
}
// var myStr = dashToCamelCase( 'this-string' );
// alert( myStr );
// var hello='this-string';
// alert(dashToPascalCase(hello));
// var myStr = camelCaseToDash( 'thisString' );
// alert( myStr );


export let isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
export let makemycss = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = makemycss(Object.values(val1)[i])
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`{`+hold+`}`
        }else{
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+`;`
        }

    }


    return val2;
}
export let tocss = (...val) =>{
     return `<style>`+makemycss(val[val.length - 1])+`</style>`
}

export let docss = (...val) =>{
    // console.log(val[1],val[2])
    if(val[0].shadowRoot == null){
        const shadowRoot = val[0].attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = tocss(val[1])+val[2];
    }else{
        console.log(val[0].shadowRoot)
        val[0].shadowRoot.innerHTML = tocss(val[1])+val[2];
    }

    // return ''
}

export let recursiveLoop1 = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop(Object.values(val1)[i])
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`:`+hold+` `
        }else{
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+` `
        }
    }
    return val2;
}

export let recursiveLoop = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        //console.log(Object.values(val1)[i])
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop1(Object.values(val1)[i])
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`=`+hold+` `
        }else{
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`='`+Object.values(val1)[i]+`' `
        }
    }
    return val2;
}
export const html = (val) => {
    var ajax = new XMLHttpRequest();
    var temp1 = ''
    ajax.open("GET", "../components/"+val+".m", false);
    ajax.send();
    temp1 += ajax.responseText;
    return temp1
    }

export let makeMyFunction = (tag) =>
{
    return (...val) =>
    {

            let temp = ''
            let j = 0;
            if(typeof Object.values(val)[0] === 'object'){
                j = 1;
            }
            for(let i = j;i<val.length;i++)
            {

                if(isFunction(val[i])){
                    temp += val[i]()
                }else{
                    temp += val[i]
                }
            }

            if(typeof Object.values(val)[0] === 'object'){

                let val1 = val[0];
                let val2 = recursiveLoop(val1)
                // console.log(val2)
                return '<'+tag+' '+val2+'>'+temp+'</'+tag+'>'
            }else{
                return '<'+tag+'>'+temp+'</'+tag+'>';
            }




    }
}
export let div = makeMyFunction('div')
export let label = makeMyFunction('label')
export let h1 = makeMyFunction('h1')
export let h2 = makeMyFunction('h2')
export let h3 = makeMyFunction('h3')
export let h4 = makeMyFunction('h4')
export let h5 = makeMyFunction('h5')
export let h6 = makeMyFunction('h6')
export let p = makeMyFunction('p')
export let pre = makeMyFunction('pre')
export let a = makeMyFunction('a')
export let title = makeMyFunction('title')
export let body = makeMyFunction('body')
export let li = makeMyFunction('li')
export let ul = makeMyFunction('ul')
export let table = makeMyFunction('table')
export let thead = makeMyFunction('thead')
export let tr = makeMyFunction('tr')
export let th = makeMyFunction('th')
export let tbody = makeMyFunction('tbody')
export let head = makeMyFunction('head')
export let td = makeMyFunction('td')
export let ol = makeMyFunction('ol')
export let header = makeMyFunction('header')
export let footer = makeMyFunction('footer')
export let nav = makeMyFunction('nav')
export let button = makeMyFunction('button')
export let input = makeMyFunction('input')
export let form = makeMyFunction('form')
export let option = makeMyFunction('option')
export let select = makeMyFunction('select')
export let span = makeMyFunction('span')
export let textarea = makeMyFunction('textarea')
export let template = makeMyFunction('template')
export let slot = makeMyFunction('slot')
export let i = makeMyFunction('i')
export let view = makeMyFunction('qcom-view')
export let $ = (val) => {
    if(typeof val == 'object'){
        new Qcom(val)
    }else {
    return makeMyFunction(camelCaseToDash(val))}
}
export let $router = (val) =>{
    $({
        router:{
            links:val
        }
    })
    // registerSW()
}





export let $send = (val) => {
    return ``+JSON.stringify(val)+`\n`}
export let $to = (val1) => {
    // console.log(val1.hasAttribute('data'))
    return JSON.parse(val1.getAttribute('data'))
}
export let $getclass =(val) =>{
   return JSON.parse(JSON.stringify(val)).class
}
// export let $$ = {
//     set:(...val)=>{
//         if(val.length==2){
//                     if(val[1] == 'object'){
//                         return localStorage.setItem(val[0],JSON.stringify(val[1]))
//                     }else{
//                         return localStorage.setItem(val[0],val[1])
//                     }
//                 }
//     }
// }
// let isJson = (str) =>{
//     try {
//         var MyJSON = JSON.stringify(MyTestStr);
//         var json = JSON.parse(MyJSON);
//         if(typeof(MyTestStr) == 'string')
//             if(MyTestStr.length == 0)
//                 return false;
//     }
//     catch(e){
//         return false;
//     }
//     return true;
// }
export let $$ = (...val) => {

    if(val.length==2){

            return localStorage.setItem(val[0],JSON.stringify(val[1]))
    }
    else if(val.length==1){
        return JSON.parse(localStorage.getItem(val[0]))
    }

}

export let $$$ = (...val) => {

    if(val.length==2){

            return sessionStorage.setItem(val[0],JSON.stringify(val[1]))
    }
    else if(val.length==1){
        return JSON.parse(sessionStorage.getItem(val[0]))
    }

}

export let lorem = (val) => {
    let temp = ''
    if(val == undefined)
    val=1
    for(const i in range(val)){
        temp+='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus vel. Sodales neque sodales ut etiam sit amet. Velit scelerisque in dictum non. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Morbi tincidunt augue interdum velit. Nibh tortor id aliquet lectus proin. Diam phasellus vestibulum lorem sed risus ultricies tristique. Est ullamcorper eget nulla facilisi etiam dignissim diam. Felis imperdiet proin fermentum leo vel orci porta. Congue nisi vitae suscipit tellus mauris. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Et ligula ullamcorper malesuada proin libero. Sed blandit libero volutpat sed. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Mattis rhoncus urna neque viverra justo nec ultrices.'
    }
    return temp
}
export let br = (val) => {
    let temp = ''
    if(val == undefined)
    val=1
    for(const i in range(val)){
        temp+='<br />'
    }
    return temp
}
// export let live = makeMyFunction('live')
// export let updateAll = (className ,val) =>
// {
//     document.querySelectorAll('*').forEach(el => {
//         if(el.getAttribute('to') == className){
//             if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
//                 el.value = val
//             }else{
//                 el.innerText = val
//             }

//         }
//     });
// }

export let getid = (val) => document.getElementById(val)
export let print = (val) => console.log(val)
export let len = (val) => val.length
export let range = (...val) => {
    let arr = []
    if(len(val) == 1){
        for(let i=0;i<val;i++){
            arr.push(i)
        }
    }else if(len(val) == 2)
    {for(let i=val[0];i<val[1];i++){
        arr.push(i)
    }}
    return arr
}
export let change = (val1,val2) => document.getElementById(val1).innerHTML = val2
export let getval = (val) => document.getElementById(val).value
export let gethtml = (val) => document.getElementById(val).innerHTML
export let gettext = (val) => document.getElementById(val).innerText
export let list = (val) => [...val]

// export class Realtime{
//     constructor(hold){
//         this.data = hold.send
//         let socket = io.connect('http://localhost:8080');
//         socket.on('for_client', function (data) {
//             hold.get(data);
//          });
//         socket.emit('for_server', { data: this.data });
//     }
// }

// let eye = new Eye({
//     on:hold.qmongo,
//     change:(newdata)=>{
//         this.refresh({data:newdata})
//     }
// })
// eye.watch()
export class Eye{
    constructor(hold){
        this.on = hold.on
        this.data = hold.data
        this.change = hold.change
        //console.log(this.change.methods.refresh)
    }
    async watch()
    {
    // console.log("hello")
    let tempdata = await this.on.find(this.data)
    // console.log(tempdata)
    setInterval(
        async() =>{
            let data = await  this.on.find(this.data)
            if(JSON.stringify(tempdata) != JSON.stringify(data)){
                tempdata = data
                // console.log(tempdata)
                this.change(data);
                // console.log("changed")
            }
        }, 50);

    }


}
export class Mongo{
    constructor(hold){
        this.db = hold.db
        this.url = hold.url
        this.schema = hold.schema
    }
    find = async (data = {}) => {
        let result;
        if(navigator.onLine){
            if($$('deleteddata') != null){
                let store1 = $$('deleteddata')
                store1.forEach(async(item)=>{
                    await this.findByIdAndDelete(item)
                })
                $$('deleteddata',null)
            }
            if($$('newdata') != null){
                let store2 = $$('newdata')
                store2.forEach(async(item)=>{
                    await this.save(item)
                })
                $$('newdata',null)
            }
        // console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/find', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
         result = await response.json()
            $$('result',result)
            // console.log("online",$$('result'));
           } else {
         result = $$('result')
            console.log("offline",result);
           }
        // console.log(result)
        return result; // parses JSON response into native JavaScript objects
      }
      findOne = async (data = {}) => {

        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findOne', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

      findById = async (data) => {
        let findresult = []
        if(navigator.onLine){
        console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findById', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data}) // body data type must match "Content-Type" header
        });
        findresult = await response.json();
        console.log(findresult)
    }else{
        findresult = $$('result').filter(item=>item._id == data)
        findresult = findresult[0]
        console.log(findresult)
    }
        return findresult; // parses JSON response into native JavaScript objects
      }
      findByIdAndDelete = async (data) => {
          let deletedresult
        if(navigator.onLine){
            console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findByIdAndDelete', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data}) // body data type must match "Content-Type" header
        });
        deletedresult = await response.json()

       } else {
        let result = $$('result')
        let deleteddata
        if($$('deleteddata') == null){
            deleteddata = []
        }else{
            deleteddata = $$('deleteddata')
        }

        result = result.filter(item => item._id !== data)
        deleteddata.push(data)
        $$('deleteddata',deleteddata)
        console.log(deleteddata)
        $$('result',result)
        deletedresult = 'offline'
       }
        return deletedresult; // parses JSON response into native JavaScript objects
      }

      findByIdAndUpdate = async (data,updates) => {
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findByIdAndUpdate', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data,data:updates}) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
      save = async (data) => {
        let saveresult
        if(navigator.onLine){
            console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/save', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        saveresult = await response.json(); // parses JSON response into native JavaScript objects
      }else {
        let result = $$('result')
        let newdata
        if($$('newdata') == null){
            newdata = []
        }else{
            newdata = $$('newdata')
        }
        // data['_id'] = String(JSON.stringify(data).hash())
        newdata.push(data)
        $$('newdata',newdata)
        console.log(newdata)
        result.push(data)
        $$('result',result)
        saveresult = 'offline'
       }
       return saveresult
    }

}

class Axios {
    constructor(hold){

    }
    get = async (val) =>{
        let response = await fetch(val);
        let commits = await response.json();
        return commits
    }
    getone = async (val,id) =>{
        let response;
        if(val.endsWith("/") === true){
            response = await fetch(val+id);}
        else{
            response = await fetch(val+'/'+id);}
        let commits = await response.json();
        return commits.data
    }
    delete = async (val) =>{
        let response = await fetch(val, {
        method: 'DELETE',
        })
        let commits = await response.json();
        return commits

    }
     post = async (url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

      put = async (url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

}
export let qcom = new Axios();
export let MakeClass = (classOf,attributes,hold) => {
    return class classOf extends HTMLElement
    {
        constructor(){
            super()
            if(hold.data){
                this.data = hold.data;
            }
            if(hold.el){
                this.el = hold.el;
            }
            if(hold.class){
                this.class = hold.class;
            }
            if(hold.css){
                this.css = hold.css
            }
            if(hold.methods){
                this.methods = hold.methods;
                for(let i = 0;i<Object.keys(this.methods).length;i++){
                    eval('this.'+Object.keys(this.methods)[i]+'='+Object.values(this.methods)[i]+'')
                }
            }
            if(hold.newhtml){
                this.newhtml = hold.newhtml
            }
            if(hold.created){
                this.created = hold.created;
                eval('('+this.created+')()');

                //
            }else{
                if(hold.class == 'QcomApp'){
                    this.html($('QcomLayout')())
                }
            }

            this.addEventListener('click',async(e)=>{
                        if(e.target.getAttribute('click') != null){
                        try{
                            eval(e.target.getAttribute('click'))
                        }catch(err) {
                        }
                    }
                },false)

        }

        design(val){
            this.css = val
        }
        html(...val){

            if(val.length == 1){
                if(this.css){
                    docss(this,this.css,val)
                }else{
                    this.innerHTML = val
                }

        }
        }
        state(val){
            this._app = new State(val)
        }
        setState(val){
            this._app.setState(val)
        }
        connectedCallback(){

            // if(this.querySelector('[to]')){
            //     console.log(this)
            //     console.log(this.querySelectorAll('[to]'))
            // }
            // this.addEventListener('input',async(e)=>{
            //         this.querySelectorAll('[to]').forEach(el => {
            //             if(el.getAttribute('to') == e.target.getAttribute('to')){
            //                 if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
            //                     el.value = e.target.value
            //                 }else{
            //                     el.innerText = e.target.value
            //                 }
            //             }
            //         });

            // },false)
        window.document.head.children[7].innerHTML = hold.class
        }
        disconnectedCallback() {
            this.removeEventListener('click',this.onInput)
        }
        static get observedAttributes() {
            return attributes;
        }
    }
}
export default class Qcom  {
            constructor(hold){
                if(hold != undefined)
                {
                    if(hold.class == undefined){
                        hold.class = 'QcomApp'
                    }
                if(hold.attributes){
                    this.attributes = hold.attributes
                }else{
                    this.attributes = []
                }
                if(hold.class){
                    let C1 = MakeClass(this.class,this.attributes,hold)
                    customElements.define(String(camelCaseToDash(hold.class)),C1)
            }
            if(hold.router){
                let view = ''
                if(hold.router.view)
                {
                     view = document.getElementById(hold.router.view);
                }else{
                     view = document.getElementById('router');
                }
                    function check(a,b)
                    {
                        let json = []
                        if(a.length!=b.length)
                            return "False";
                        else
                        {
                            for(var i=0;i<a.length;i++)
                            if(a[i]!=b[i]){
                                if(a[i].startsWith(":") == true){

                                    json[a[i]] = b[i]
                                }else{
                                    return "False"
                                }
                                json[a[i]] = b[i]
                            }
                                return {json:json,response:"True"}
                        }
                    }
                function navigate(event){
                    let route = event.target.attributes[0].value;
                    let routeInfo = myFirstRouter.routes.filter((r)=>{
                        if(r.type == 'dynamic')
                        {

                            return route.startsWith(r.path.split('/:')[0])
                        }
                        else{
                            return r.path == route
                        }
                    })[0];
                    if(!routeInfo){
                            if(hold.router.error){
                                window.history.pushState({},'',hold.router.error)
                                view.innerHTML = hold.router.error
                            }else{
                                window.history.pushState({},'','404')
                                view.innerHTML = '404'
                                }
                    }else{
                        if(routeInfo.type == 'dynamic'){
                            window.history.pushState({},'',route)
                            view.innerHTML = 'You have clicked the '+routeInfo.name+' Route With '+route.split('/')[2]
                        }else{
                            window.history.pushState({},'',routeInfo.path)
                            let demo = $(routeInfo.name)
                            view.innerHTML = demo()
                            // view.innerHTML = 'You have clicked the '+routeInfo.name+' route'
                        }

                    }
                }
                let activeRoutes = Array.from(document.querySelectorAll('[route]'))
                activeRoutes.forEach((route)=>{
                    route.addEventListener('click',navigate,false)
                })
                let Router = function(name,routes){
                    let newarr = new Array()
                     // {   path:'/',
                    //     name:'Root',
                    //     type:'static'
                    // },
                    // {
                    //     path:'/MyPageone',
                    //     name:'MyPageone',
                    //     type:'static'
                    // },
                    // {
                    //     path:'/dynamic/:id',
                    //     name:'Dynamic',
                    //     type:'dynamic'
                    // }
                    routes.forEach((route)=>{
                        let newobj = new Object()
                        if(typeof route != 'object'){
                            route.split("/:").length>1?newobj.type='dynamic':newobj.type='static'
                            newobj.name = route
                            if(route.split("/:").length>1){
                                newobj.path = route
                            }else{
                                if(route == 'Root' || route == 'Index' || route == 'index' || route=='index'){
                                    newobj.path = '/'
                                }else{
                                    newobj.path = '/'+route
                                }
                            }
                        newarr.push(newobj)
                        }else{
                            newarr.push(route)
                        }

                    })
                    // console.log(newarr)

                    return {
                        name:name,
                        routes:newarr
                    }

                }

                let myFirstRouter = new Router('myFirstRouter',hold.router.links)
                    let currentPath = window.location.pathname;

                    if(currentPath == '/'){
                    let demo;
                    if(hold.router.root){
                        demo = $(hold.router.root)
                    }else{
                        demo = $('QcomHome')
                    }
                        view.innerHTML = demo()
                        // view.innerHTML = hold.router.root
                    }else{

                        let route = myFirstRouter.routes.filter(r=>{
                            if(r.type == 'dynamic'){
                                 return check(r.path.split('/'),currentPath.split('/')).response == "True"
                            }else{
                                return r.path == currentPath
                            }


                        })[0];
                        if(route){
                            if(check(route.path.split('/'),currentPath.split('/')).response == "True" && check(route.path.split('/'),currentPath.split('/')).json[":id"] != undefined){

                                view.innerHTML = `You are on the `+ route.name + ' Path With '+ check(route.path.split('/'),currentPath.split('/')).json[":id"]

                            }else{
                                let demo = $(route.name)
                                view.innerHTML = demo()
                            }

                        }else{
                            if(hold.router.error){
                            view.innerHTML = hold.router.error
                            }else{
                                view.innerHTML = '404'
                            }
                        }
                    }
                }
        }

        }
    }



// export class Qrouter{
//             constructor(hold){
//                 if(hold.links){
//                 let view = document.getElementById(hold.view);
//                     function check(a,b)
//                     {
//                         let json = []
//                         if(a.length!=b.length)
//                             return "False";
//                         else
//                         {
//                             for(var i=0;i<a.length;i++)
//                             if(a[i]!=b[i]){
//                                 if(a[i].startsWith(":") == true){

//                                     json[a[i]] = b[i]
//                                 }else{
//                                     return "False"
//                                 }
//                                 json[a[i]] = b[i]
//                             }
//                                 return {json:json,response:"True"}
//                         }
//                     }
//                 function navigate(event){
//                     let route = event.target.attributes[0].value;
//                     let routeInfo = myFirstRouter.routes.filter((r)=>{
//                         if(r.type == 'dynamic')
//                         {

//                             return route.startsWith(r.path.split('/:')[0])
//                         }
//                         else{
//                             return r.path == route
//                         }


//                     })[0];
//                     if(!routeInfo){
//                                 window.history.pushState({},'',hold.error)


//                         view.innerHTML = hold.error
//                     }else{
//                         if(routeInfo.type == 'dynamic'){
//                             window.history.pushState({},'',route)
//                             view.innerHTML = 'You have clicked the '+routeInfo.name+' Route With '+route.split('/')[2]
//                         }else{
//                             window.history.pushState({},'',routeInfo.path)
//                             let demo = $(routeInfo.name)
//                             view.innerHTML = demo()
//                             // view.innerHTML = 'You have clicked the '+routeInfo.name+' route'
//                         }

//                     }
//                 }
//                 let activeRoutes = Array.from(document.querySelectorAll('[route]'))
//                 activeRoutes.forEach((route)=>{
//                     route.addEventListener('click',navigate,false)
//                 })
//                 let Router = function(name,routes){
//                     return {
//                         name:name,
//                         routes:routes
//                     }
//                 }

//                 let myFirstRouter = new Router('myFirstRouter',hold.links)
//                     let currentPath = window.location.pathname;

//                     if(currentPath == '/'){
//                          view.innerHTML = `You are on the `+hold.root+` Path`
//                     }else{

//                         let route = myFirstRouter.routes.filter(r=>{
//                             if(r.type == 'dynamic'){
//                                  return check(r.path.split('/'),currentPath.split('/')).response == "True"
//                             }else{
//                                 return r.path == currentPath
//                             }


//                         })[0];
//                         if(route){
//                             if(check(route.path.split('/'),currentPath.split('/')).response == "True" && check(route.path.split('/'),currentPath.split('/')).json[":id"] != undefined){

//                                 view.innerHTML = `You are on the `+ route.name + ' Path With '+ check(route.path.split('/'),currentPath.split('/')).json[":id"]

//                             }else{
//                                 let demo = $(route.name)
//                                 view.innerHTML = demo()
//                             }

//                         }else{
//                             view.innerHTML = hold.error
//                         }
//                     }
//                 }
//             }
//         }
var style = document.createElement('style');
document.head.appendChild(style);

new Qcom ({
    class:"QcomCenter",
    created:()=>{
        this.style.textAlign = 'center'
    }
})
let center = $("QcomCenter")

new Qcom ({
    class:"QcomJustify",
    created:()=>{
        for(let i in range(this.childElementCount))
        {
            this.children[i].style.marginRight = '4%',
            this.children[i].style.float = 'right'
        }
    }
})
let justify = $("QcomJustify")




new Qcom ({
    class:"QcomRight",
    created:()=>{
        this.style.textAlign = 'right',
        this.style.float = 'right'
    }
})
let right = $("QcomRight")


new Qcom ({
    class:"QcomLeft",
    created:()=>{
        this.style.textAlign = 'left'
    }
})
let left = $("QcomLeft")


new Qcom ({
    class:"QcomPointer",
    created:()=>{
        this.style.cursor = 'pointer'
    }
})
let pointer = $("QcomPointer")



// new Qcom ({
//     class:"QcomAlert",
//     created:()=>{
//         this.html(card(left(),right(pointer('X'))))
//     }
// })
// export let alert = $("QcomAlert")

// export let alert = (val)=>
// {
//     setTimeout(function(){
//     console.log(document.querySelectorAll('#qcomAlert')[0].outerHTML = '');
//     }, 3000);

//     // return card({id:'qcomAlert'},left(val),right(pointer('X')))
//     return div({id:'qcomAlert'},left(val))
// }
// ()=>{
//     setTimeout(function(){
//         consoledocument.querySelectorAll('qcom-alert')[0].outerHTML= '';
//     }, 3000);
// }

new Qcom ({
    class:"QcomInput",
    created:()=>{
        for(let i in range(this.children.length)){
            this.children[i].style.display= 'block';
            this.children[i].style.outline= 'none';
            this.children[i].style.width= '100%';
            this.children[i].style.height= 'calc(1.5em + .75rem + 2px)';
            this.children[i].style.padding= '.375rem .75rem';
            this.children[i].style.fontSize= '1rem';
            this.children[i].style.fontWeight= '400';
            this.children[i].style.lineHeight= '1.5';
            this.children[i].style.color= '#495057';
            this.children[i].style.backgroundColor= '#fff';
            this.children[i].style.backgroundClip= 'padding-box';
            this.children[i].style.border= '1px solid #ced4da';
            this.children[i].style.borderRadius= '.25rem';
            this.children[i].style.boxSizing= 'border-box';
            this.children[i].style.transition= 'border-color .15s ease-in-out,box-shadow .15s ease-in-out';

        }
    }
})
let qinput = $("QcomInput")


style.sheet.insertRule(`
qcom-textarea{
    display: inline-block;
    width: 100%;
    padding: 0.6em;
    margin-bottom:1em;
    box-sizing: border-box;
    user-select: none;
    font-family: hero-new, sans-serif;
    text-align: left;
    text-decoration: none;
    background-color: inherit;
    color: rgb(73, 80, 87);
    outline: none;
    // cursor: pointer;
    border: none;
    -webkit-appearance: none;
    border-radius: 5px;
    background: #ffffff;
    background: #ffffff;
    box-shadow:  -5px 5px 10px #d9d9d9,
    5px -5px 10px #ffffff;
    // transition: box-shadow 0.2s ease 0s;
    // box-shadow: rgb(255, 255, 255) -5px -5px 10px, rgb(187, 187, 187) 5px 5px 10px, rgb(255, 255, 255) 0px 0px 0px inset, rgb(187, 187, 187) 0px 0px 0px inset;
}`)

new Qcom ({
    class:"QcomTextarea",
    data:{
        firstclick:0
    },
    created:()=>{

        this.contentEditable = 'true';
        this.innerText = this.getAttribute('placeholder')

        // this.style.transition= 'border-color .15s ease-in-out,box-shadow .15s ease-in-out';
        this.addEventListener('click',(()=>{
            if(this.data.firstclick == 0){
            this.innerText = ''
            this.data.firstclick = 1
            }
        }))
        this.addEventListener('mouseleave',(()=>{
            // console.log('ok')
        if(this.innerText == ''){
            this.data.firstclick = 0
            this.innerText = this.getAttribute('placeholder')

        }
    }))
    }
})

let qtextarea = $('QcomTextarea')

new Qcom ({
    class:"QcomPrimary",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#007bff'
         }else
        {for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#007bff'
           this.children[i].style.color = '#fff'
        }}
    }
})
let primary = $("QcomPrimary")

new Qcom ({
    class:"QcomSuccess",
    created:()=>{
         if(this.children.length == 0){
            this.style.color = '#28a745'
         }else{
            for(let i in range(this.children.length)){
                this.children[i].style.backgroundColor = '#28a745'
                this.children[i].style.color = '#fff'
             }
         }

    }
})
let success = $("QcomSuccess")




new Qcom ({
    class:"QcomUppercase",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'uppercase'

             }

    }
})
let uppercase = $("QcomUppercase")



new Qcom ({
    class:"QcomLowercase",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'lowercase'

             }

    }
})
let lowercase = $("QcomLowercase")


new Qcom ({
    class:"QcomCapitalize",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'capitalize'

             }

    }
})
let capitalize = $("QcomCapitalize")

new Qcom ({
    class:"QcomInfo",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#17a2b8'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#17a2b8'
           this.children[i].style.color = '#fff'
        }
    }
    }
})
let info = $("QcomInfo")

new Qcom ({
    class:"QcomWarnning",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#ffc107'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#ffc107'
           this.children[i].style.color = '#fff'
        }
    }
    }
})
let warnning = $("QcomWarnning")

new Qcom ({
    class:"QcomDanger",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#dc3545'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#dc3545'
           this.children[i].style.color = '#fff'
        }
    }
    }
})

let danger = $("QcomDanger")

new Qcom ({
    class:"QcomDark",
    created:()=>{
        this.doit(this.children)
    },
    methods:{
        doit:(val)=>{
            if(val.length == 0){
                this.style.color = '#343a40'
             }else
            {
            for(let i in range(val.length)){
                this.children[i].style.backgroundColor = '#343a40'
                this.children[i].style.color = '#fff'
             }
            }
        }
    }
})
let dark = $("QcomDark")

new Qcom ({
    class:"QcomLight",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#f8f9fa'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#f8f9fa'
           this.children[i].style.color = '#000'
        }
    }
    }
})
let light = $("QcomLight")

let changetable = () =>
{



// style.sheet.insertRule(`qcom-view{background:red,boxShadow:-5px -5px 10px #fff,
//                 5px 5px 10px #bbb,
//                 0px 0px 0px #fff inset,
//                 0px 0px 0px #bbb inset}`)

style.sheet.insertRule(`
#qcomAlert{
    position: fixed;
    top: 10;
    right: 0;
    width: auto;
    height:auto;
    padding:1em;
    border: 1px solid #000;
    text-align:center
}
`)
style.sheet.insertRule(`
body{font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`)
style.sheet.insertRule(`
nav{
    margin:-8px;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: .5rem 1rem;
}
`)




function reportWindowSize() {
    if(window.innerWidth < 700){
        smtable()
    }else{
        bigtable()
    }
}

window.onresize = reportWindowSize;

if(window.matchMedia("(max-width: 700px)").matches == true){
   smtable()
}
else{
    bigtable()
}
function bigtable()
{

style.sheet.insertRule(`thead {
    color: rgba(0,0,0,0.6);
}`)
style.sheet.insertRule(`thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}`)
style.sheet.insertRule(`tr {
    border-bottom: 1px solid rgba(0,0,0,0.12);
}`)
style.sheet.insertRule(`tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}`)
style.sheet.insertRule(`td, th {
    padding: 15px 10px;
}`)
style.sheet.insertRule(`td, th {
    padding: 15px 5px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
}`)
}

// console.log(window.matchMedia("(max-width: 501px)").matches)
function smtable()
{

style.sheet.insertRule(`
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: block;
        position: relative;

    }`)
    // style.sheet.insertRule(`
    // table {
    //     width: 100%;
    //     display: table;
    //     border-collapse: collapse;
    //     border-spacing: 0;
    //     border: none;
    // }`);

    style.sheet.insertRule(`table td:empty:before {
        content: ''
    }`)
    style.sheet.insertRule(`table th,
    table td {
        margin: 0;
        vertical-align: top
    }`)
    style.sheet.insertRule(`table th {
        text-align: left
    }`)
    style.sheet.insertRule(`table thead {
        display: block;
        float: left
    }`)
    style.sheet.insertRule(`table thead tr {
        display: block;
        padding: 0 10px 0 0
    }`)
    style.sheet.insertRule(`table thead tr th::before {
        content: ''
    }`)
    style.sheet.insertRule(`table tbody {
        display: block;
        width: auto;
        position: relative;
        overflow-x: auto;
        white-space: nowrap
    }`)
    style.sheet.insertRule(`table tbody tr {
        display: inline-block;
        vertical-align: top
    }`)
    style.sheet.insertRule(`table th {
        display: block;
        text-align: right
    }`)
    style.sheet.insertRule(`table td {
        display: block;
        min-height: 1.25em;
        text-align: left
    }`)
    style.sheet.insertRule(`table tr {
        border-bottom: none;
        padding: 0 10px
    }`)
    style.sheet.insertRule(`table thead {
        border: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.12)
    }`)

}




}
changetable()
// window.document.addEventListener('resize',()=>{
//     console.log("ok")
// })
new Qcom ({
    class:"QcomContainer",
    css:{
       'div':{ margin: '3rem',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: 'left'}
    },
    created:()=>{
        this.html(div(slot()))
    }
})
let container = $("QcomContainer")




new Qcom ({
    class:"QcomCard",
    created:()=>{
        // this.style.boxSizing= 'border-box';
        this.style.width='96%';
        // this.style.height='98%';
        this.style.padding = '2%';
        this.style.margin = '1%';

        // this.style.userSelect= 'none';
        this.style.display= 'inline-block';
        // this.style.minWidth= this.getAttribute('qtype');
        this.style.fontFamily= 'hero-new, sans-serif';
        // this.style.textAlign= 'center';
        // this.style.textDecoration= 'none';
        // this.style.outline= 'none';
        // this.style.border= '2px solid red';
        this.style.webkitAppearance= 'none';
        this.style.transition= 'box-shadow .2s';
        this.style.boxShadow= `-5px -5px 10px #eee,
            5px 5px 10px #bbb,
            0px 0px 0px #eee inset,
            0px 0px 0px #bbb inset`


    }
})
let card = $("QcomCard")


new Qcom ({
    class:"QcomRow",
    css:{
       'div':{ display: '-ms-flexbox',
        display: 'flex',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        boxSizing: 'border-box'}
    },
    created:()=>{
        {
            this.html(div(slot()))
        }

    }
})
let row = $("QcomRow")

new Qcom ({
    class:"QcomCol",
    noOfCols:0,
    created:()=>
        {
                hold.noOfCols = this.parentElement.childElementCount
                if(window.matchMedia("(min-width: 768px)").matches == true){
                    this.lg(window.matchMedia("(min-width: 768px)"))
                }
                else if(window.matchMedia("(max-width: 768px)").matches == true){
                 this.md(window.matchMedia("(max-width: 768px)"))
                }else window.matchMedia("(max-width: 500px)")
                {
                    this.sm(window.matchMedia("(max-width: 500px)"))
                }
        },
        methods:{
            lg:(lg)=>
            {
                var md = window.matchMedia("(max-width: 768px)")
                md.addListener(this.md)

                var sm = window.matchMedia("(max-width: 500px)")
                sm.addListener(this.sm)
                if(lg.matches == true){
                    let sizeOfCol = 96 / hold.noOfCols
                    this.style.position= 'relative';
                    // this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= sizeOfCol+'%';
                    this.style.flex = '0 0 '+sizeOfCol+'%'
                }
            },
            md:(md)=>
            {
                var sm = window.matchMedia("(max-width: 500px)")
                sm.addListener(this.sm)

                var lg = window.matchMedia("(min-width: 768px)")
                lg.addListener(this.lg)

                if(md.matches == true){
                    let sizeOfCol = 96 / hold.noOfCols
                    this.style.position= 'relative';
                    // this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= (sizeOfCol*2)+'%';
                    this.style.flex = '0 0 '+(sizeOfCol*2)+'%'
                }
            },
            sm:(sm)=>
            {
                var md = window.matchMedia("(min-width: 500px)")
                md.addListener(this.md)
                var lg = window.matchMedia("(min-width: 768px)")
                lg.addListener(this.lg)
                if(sm.matches == true){
                    let sizeOfCol = 96 / hold.noOfCols
                    this.style.position= 'relative';
                    this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= (sizeOfCol*2)+'%';
                    this.style.flex = '0 0 '+(sizeOfCol*2)+'%'
                }
            }
        }



})
let col = $("QcomCol")

// new Qcom({
//     class:'QcomCard',
//     created:()=>{
//         // this.style.border = '5px solid red'
//         this.style.margin= '5em';
//         this.style.marginTop='100px';
//         this.style.borderRadius='4px';
//         this.style.padding='3em';
//         // this.style.backgroundColor='#E0E5EC';
//         this.style.boxShadow= '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)';
//     }
// })
// let card = $("QcomCard")




new Qcom ({
    class:"QcomButton",
    attributes:['qtype'],
    created:()=>{
        {
            if(this.getAttribute('qtype') == 'sm'){
                this.design({
                'div':{
                    padding: '.25rem .5rem',
                    fontSize: '.875rem',
                    lineGeight: '1.5',
                    borderRadius: '.2rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }
            })}
                else if(this.getAttribute('qtype') == 'md'){
                this.design({
                'div':{
                    padding: '.5rem 0.8rem',
                    fontSize: '1rem',
                    lineGeight: '2',
                    borderRadius: '.4rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }
            })
            }else if(this.getAttribute('qtype') == 'lg'){
                this.design({
                'div':{
                    padding: '0.5rem 2rem',
                    fontSize: '2rem',
                    lineGeight: '3',
                    borderRadius: '.4rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }})
            }else if(this.getAttribute('qtype') == 'block'){
                this.design({
                'div':{
                    display: 'block',
                    width: '100%',
                    padding: '0.6em 0.6em',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }})
            }else if(this.getAttribute('qtype') == 'link'){
                this.design({
                'div':{
                    cursor:'pointer',
                    fontSize:'0.9em'
                },'div:hover':{
                    color:color.grey
                }})
            }
            this.html(div(slot()))


        }


    }
})
let qbutton = $("QcomButton")





$({
    class:'QcomAppBar',
    css:{
        'div':{
            backgroundColor: '#FFF',
            color: '#000',
            maxHeight: '50px',
            maxHeight: '50px',
            fontSize:'1.4rem',
            padding: '10px',
            zIndex : '9999',
            marginLeft:'-7px',
            position: 'fixed',
            top: 0,
            width: '99%',
            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
        }
    },
    created:()=>{
        this.html(div(this.getAttribute('title')+slot()))
    },
    attributes:['title','actions','background']
})

let appbar = $("QcomAppBar")


$({
    class:'QcomBottomNavigationBar',
    css:{
       'div':{ backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#000',
        maxHeight: '50px',
        fontSize:'1.4rem',
        zIndex: '9999',
        position: 'fixed',
        bottom: 0,
        width:'100%',
        marginRight:'100px',
        boxShadow:'0 2px 5px 0 rgba(0, 0, 0, 0.26)'}
    },
    created:()=>{
        this.html(div(slot()))
    },
    attributes:['title','actions','background']
})

let bottomNavigationBar = $("QcomBottomNavigationBar")



