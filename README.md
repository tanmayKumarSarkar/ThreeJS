﻿# ThreeJS implementations with React three fiber

 The .gbl model is used for the terrain, wind turbine & solar panel

![ThreeJS](https://github.com/tanmayKumarSarkar/ThreeJS/assets/10758438/9dd1f833-449b-4559-b06d-f8f17789d8e9)

### What it is doing

The `Node Js` server is generating and sending `wind speed` and `light intensity` data over `web socket` to `React App`.
based on the data received the turbine blade is rotating and also hypothetical power is being generated that is shown in kWh
also, solar power is shown based on the light intensity received.

### How to run:

1. Download Repo
2. navigate to `server`
```
cd .\react-three-fiber-project\server\
npm i
node index.js
```
3. navigate to `client`
```
cd .\react-three-fiber-project\client\
npm i
npm start
```

