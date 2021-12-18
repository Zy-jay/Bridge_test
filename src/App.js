import React, { useEffect } from 'react';
import { Widget } from "@maticnetwork/wallet-widget";

const widget = new Widget({
  appName: "BGNTtest_Bridge",
  network: "testnet",
  autoShowTime: 1,
  position: 'center',
  height: 630,
  width: 540,
  overlay: false,
  closable: false,
  style: {
      color: 'blue;',
      backgroundColor: 'rgb(29,33,37);'
      
   }
});

const App = () => {

  // subscribe to event onLoad
  const load = () => {
    console.log('widget is loaded');
  };

  const close = () => { 
    window.open ='http://127.0.0.1:5501/index.html';
    console.log('widget is closed');
  };

  // const show = () => {
  //   console.log('widget is show');
  // };


  useEffect(() => {
    widget.on('load', load);
    widget.on('close', close);
    // widget.on('show', show);
    widget.create();
    
  }, [])

  return (
    <React.Fragment>
    
    </React.Fragment>
  )
}

export default App
