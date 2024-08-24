function customRender(reactElement,container){
   /* Approach 1
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);

    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
    */
   
    /* Approach 2 better one */
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop==='children') continue; //pehle react me log props ke ander hi children de dete the..toh usse tackle krne ke liye h ye line
       domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement={
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
 children:'click me to go to google.com'
}

const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer);