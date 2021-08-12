export function initData(el, { name, value, oldValue, expression, arg, modifiers }, vnode, args) {
    let result = "";
    if (args) {
        switch (args) {
            case "mobile":
                el.onblur = function () {
                    if (/^[1]\d{10}$/.test(el.value)) {
                        value(true)
                    } else {
                        value(false)
                    }
                }
                break;
            case "float":
                console.log(value)
                let matchs =  new RegExp('^\\d{0,}\\.?\\d{0,'+value+'}');
                result = el.value&&el.value.match(matchs)&&el.value.match(matchs)[0]
            
                el.value = result;
                el.innerHTML = result;
                el.dispatchEvent(new Event("input"))
                break;
        }
    } else {
        String(value).match(/\d+/) && String(value).match(/\d+/).forEach(e => {
            result += e;
        })
        el.value = result;
        el.innerHTML = result;
        el.dispatchEvent(new Event("input"))
    }

}