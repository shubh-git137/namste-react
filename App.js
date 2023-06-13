const heading = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"I'm a h1 tag"),React.createElement('h2',{},"I'm h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

