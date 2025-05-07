function customRender (reactElement , container) {
    const domElement = document.createElement(reactElement.type)    
    domElement.innerHTML = reactElement.Children;
     
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        taarget: "_blank",
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)